const React=require('react');
const {Link, IndexLink} = require('react-router');

const Nav= React.createClass({
    onSearch:function(e){
        const location = this.refs.location.value;
        let encodedLocation = encodeURIComponent(location)
        
        if(location.length>0){
            this.refs.location.value='';
            window.location.hash=`#/?location=${encodedLocation}`;
        }
        e.preventDefault();
        
    },
    render: function(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                     <ul className="menu">
                         <li className="menu-text">React Weather App</li>
                         <li>
                             <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink> 
                         </li>
                         <li>
                             <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
                         </li>
                         <li>
                             <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
                         </li>
                     </ul>
                </div>
                <div className="top-bar-right">
                     <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" ref="location" placeholder="Search Weather by city"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                     </form>
                </div>
            </div>  
         )
    }
});

module.exports=Nav;