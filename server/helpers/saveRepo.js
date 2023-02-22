const gitToken = require('../../config.js').TOKEN;
const axios = require('axios');
const dbHelpers = require('../../db/dbHelpers.js');
const Promise = require('bluebird');

var fetchReposFromApi = (username, cb) => {
	let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${gitToken}`
    }
  };

	axios.get(options.url, options)
	.then((gitUserData) => {
		console.log(gitUserData.data);
		cb(null, gitUserData.data);
	})
	.catch((err) => {
		console.log(err, 'Api Fetch Error!');
		cb(err, null);
	});
}

var saveRepos = (username, cb) => {
  fetchReposFromApi(username, (err, data) => {
		if (err) {
			cb(err);
		} else {
			var repoPromises = [];
			data.forEach((curRepo) => {
				var repoInfo = {};
				repoInfo.username = username;
				repoInfo.name = curRepo.name;
				repoInfo.url = curRepo.url;
				repoInfo.watchers = curRepo.watchers;
				repoInfo.repo_id = curRepo.id;
				repoPromises.push(new Promise((resolve, reject) => {
					dbHelpers.saveRepoInfo(repoInfo, (err) => {
						if (err) {
							reject(err);
						} else {
							resolve();
						}
					})
				}));
			});

			Promise.all(repoPromises)
			.then(() => {
				cb(null);
				console.log('succesfull save');
			})
			.catch((err) => {
				console.log("Error saving repo", err);
				cb(err);
			});
		}
	});
};

module.exports = saveRepos;