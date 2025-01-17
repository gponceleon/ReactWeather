const React = require("react");
const ReactDOM = require("react-dom");
const { Route, Router, IndexRoute, hashHistory } = require("react-router");
const Main = require('Main');
const Weather=require('Weather');
const About=require('About');
const Examples=require('Examples');

// load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//load styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>
        <IndexRoute component={Weather}/>
    </Route>
</Router>, 
document.getElementById("app"));

//webpack -w se queda escuchando cambios
