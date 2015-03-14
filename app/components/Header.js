'use strict';
var React = require('react');
var userStore = require('../stores/userStore');

var Header = React.createClass({
  getInitialState: function(){
    return {
      username: this.props.username
    }
  },
  render: function(){
    var styles = {
      header: {
        backgroundColor: '#999'
      }
    };
    return (
      <h4 style={styles.header}>header i am{this.state.username}</h4>
    )
  }
});

module.exports = Header;