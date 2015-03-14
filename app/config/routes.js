'use strict';
var React = require('react');
var { Route, RouteHandler, DefaultRoute } = require('react-router');
var Main = require('../components/Main');
var Profile = require('../components/Profile');
var Header = require('../components/Header');
var Home = require('../components/Home');


module.exports = (
  <Route name='app' path='/' handler={Main}>
    <Route name='profile' path=':username' handler={Profile} />
    <DefaultRoute handler={Home} />
  </Route>
);