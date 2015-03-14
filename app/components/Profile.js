var React = require('react');
var Router = require('react-router');
var User = require('./github/User');
var Repos = require('./github/Repos');

var Profile = React.createClass({
  mixins: [Router.State],
  render: function(){
    var username = this.getParams();
    return (
        <div>
          <User username={username}/>
          <Repos username={username}/>
        </div>
   ) 
  }
});

module.exports = Profile;