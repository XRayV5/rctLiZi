var axios = require('axios')
var id = "XRayV5"
var sec = "ceb854e9cd32e2470e9b8bdba922d490e99d28d0"
var param = "?client_id=" + id + "&client_secret=" + sec

function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username) // promise
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100')
}

function getTotalStars(repos) {
  return repos.data.reduce(function(prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData (player) {
    return getRepos(player.login)
      .then(getTotalStars)
      .then(function(totalStars) {
        return {
          followers: player.followers,
          totalStars: totalStars
        }
      })
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]

}
var helpers = {
  getPlayersInfo: function(players) {
    // fetch API data
    // example of handling ajax request with promises
    return axios.all(players.map(function(username) {
      return getUserInfo(username)
    })).then(function (info) {
        //array of resovled promises
        console.log(info)
        return info.map(function(user) {
          return user.data
        })
    }).catch(function(err) {
        console.log('error: ', err)
    })
  },
  battle: function(players) {
    var playerOneData = getPlayersData(players[0])
    var playerTwoData = getPlayersData(players[1])

    return axios.all([ playerOneData, playerTwoData ])
        .then(calculateScores)
        .catch(function(err){ console.log(err) })
  }
}

module.exports = helpers
