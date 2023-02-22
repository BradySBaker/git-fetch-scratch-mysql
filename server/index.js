const express = require('express');
const app = express();
const saveRepos = require('./helpers/saveRepo');
const db = require('../db/index.js')

var port = 3000;

app.use(express.static('./client/dist'));
app.use(express.json());

app.post('/repos', (req, res) => {
	saveRepos(req.body.username, (err) => {
		if (err) {
			res.statusCode = 404;
			res.send(err);
		} else {
			res.statusCode = 201;
			res.send(JSON.stringify(req.body));
		}
	});
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
})