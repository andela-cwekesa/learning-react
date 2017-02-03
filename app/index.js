let React = require('react');
let ReactDOM = require('react-dom');
var routes = require('./config/routes');

// let HelloWorld = React.createClass({
// 	render: function() {
// 		return (
// 			<div>Learning</div>
// 			)
// 	}
// });
// ReactDOM.render(< HelloWorld /> , document.getElementById('app'));

ReactDOM.render(
	routes , document.getElementById('app')
	);