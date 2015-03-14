var Constants = require('../constants/Constants');
var axios = require('axios');

var id = "6708311fb39b25459331";
var sec = "c43e086a187630b494de481ac84d045c3a1819f6";
var param = "?client_id=" + id + "&client_secret=" + sec;

var githubUtils = {
  getBio: function(username){
    var url = "https://api.github.com/users/" + username + param;
    return axios.get(url);
  },
  getRepos: function(username){
    var url = "https://api.github.com/users/" + username + "/repos" + param;
    return axios.get(url);
  },
  changeUser: function(username){
    var url = "https://api.github.com/users/" + username + param;
    return axios.get(url);
  }
};

module.exports = githubUtils;
