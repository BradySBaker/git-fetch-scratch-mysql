const mysql = require('mysql');
const sqlPassword = require('../config.js').sqlPassword;

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: sqlPassword,
	database: 'repos'
});


db.connect((err) => {
	if (err) {
		console.log('Error starting mysql', err);
	} else {
		console.log('Started my sql!');
	}
});

//Create table repos
var query = `CREATE TABLE IF NOT EXISTS repos
(
  id INTEGER NOT NULL AUTO_INCREMENT,
  username CHAR(50) NULL DEFAULT NULL,
  name CHAR(100) NULL DEFAULT NULL,
  url CHAR(100) NULL DEFAULT NULL,
  watchers INTEGER NULL DEFAULT NULL,
  repo_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
)`;
db.query(query, (err) => {
	if (err) {
		console.log('Error creating table', err);
	}
});


module.exports = db;