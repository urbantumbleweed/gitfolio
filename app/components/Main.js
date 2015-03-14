'use strict';
var React = require('react');
var {
  Route,
  RouteHandler,
  DefaultRoute
} = require('react-router');
var Home = require('./Home'); //make home component
var Header = require('./Header');

var Main = React.createClass({
  getInitialState: function(){
    return {
      username: ''
    }
  },
  updateHeader: function(obj){
    this.setState({
      username: obj.username
    })
  },
  render: function(){
    return (
      <div>
        <Header username={this.state.username}/>
        <RouteHandler />
      </div>

    )
  }
});

module.exports = Main;