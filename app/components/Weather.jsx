const React = require("react");
const WeatherForm = require("WeatherForm");
const WeatherMessage = require("WeatherMessage");
const openWeather=require('openWeather');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading:false,
    };
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading:true,
      errorMessage: undefined,
      location:undefined,
      temp: undefined
    });

    openWeather.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp, 
        isLoading: false
      });
    }, function (e) {
      console.log(e)
      that.setState({
        isLoading:false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function(){
    let location = this.props.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash='#/';
    }
  },
  componentWillReceiveProps: function(newProps){
    let location = newProps.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash='#/';
    }
  },
  render: function() {
    const {isLoading, location, temp, errorMessage}=this.state;
    
    function renderMessage(){
      if (isLoading){
        return <h3 className="text-center">Fetching weather...</h3>
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    function renderError(){
      if(typeof errorMessage ==='string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
