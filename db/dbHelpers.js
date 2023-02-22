var db = require('./index.js');

var saveRepoInfo = (repoInfo, cb) => {
	var columns = 'username, name, url, watchers, repo_id';
	var values = `"${repoInfo.username}", "${repoInfo.name}", "${repoInfo.url}", "${repoInfo.watchers}", "${repoInfo.repo_id}"`
	var query = `INSERT INTO repos (${columns}) VALUES (${values})`
	db.query(query, (err) => {
		if (err) {
			cb(err);
		} else {
			cb(null);
		}
	});
};

module.exports.saveRepoInfo = saveRepoInfo;