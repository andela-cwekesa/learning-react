var axios = require('axios');
var ReactDOM = require('react-dom');

var id =11340190;
var sec ='';
var param = 'client_id' + id + 'client_secret='+ sec;

function getUserInfo (username) {
	return axios.get('https://api.github.com/users/' + username)
}

var helpers = {
	getPlayersInfo: function (players) {
		return axios.all(players.map(function (username){
			return getUserInfo(username)
		})).then(function (info) {
			return info.map(function (user) {
				return user.data
			})
		}).catch(function (err) {
			//console.log(err)
			alert('Repository not found')
			//ReactDOM.render('err',document.getElementById('error'))

		})
	}
};

module.exports = helpers;