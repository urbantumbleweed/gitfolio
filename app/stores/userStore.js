var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');
var {EventEmitter} = require('events');
var objectAssign = require('react/lib/Object.assign');
var githubUtils = require('../utils/githubUtils');

var CHANGE_EVENT = 'change';

var _state = {
  username: '',
  user: {},
  repos: []
};


var setUser = function(user){
  _state.user = user;
};

var setRepos = function(repos){
  _state.repos = repos;
};






// User
// "login": "dasebast",
//   "id": 10407991,
//   "avatar_url": "https://avatars.githubusercontent.com/u/10407991?v=3",
//   "html_url": "https://github.com/dasebast",
//   "repos_url": "https://api.github.com/users/dasebast/repos",
//   "name": "Doug Sebastian",
//   "company": "",
//   "blog": "",
//   "location": "Provo, Utah",
//   "email": "dasebast@gmail.com",
//   "hireable": false,
//   "bio": null,
//   "public_repos": 56,
//   "followers": 4
//   "created_at": "2015-01-05T21:03:31Z",
//   "updated_at": "2015-03-13T06:18:41Z"
//
// Repo
// //   "id": 28833672,
//   "full_name": "dasebast/JS-Basics"
//   "stargazers_count": 0,
//   "description": ""
//   "homepage": null || html_url": "https://github.com/dasebast/JS-Basics",
//   "updated_at": "2015-01-09T19:35:48Z"
var userStore = objectAssign({}, EventEmitter.prototype,{
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeChangeListener(CHANGE_EVENT, cb);
  },
  getUser: function(){
    return this._state.user;
  },
  getRepos: function(){
    return this._state.repos;
  }
});

module.exports = userStore;