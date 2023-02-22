import React from 'react';
import reactDom from 'react-dom';
import Search from './components/search.jsx';
import $ from 'jquery';

var App = () => {
	var update = () => {
		console.log('updating page!');
	}

	var getRepos = () => {

	};

	var postRepos = (username) => {
		console.log({username});
		$.ajax({
			type: "POST",
			url: "/repos",
			contentType: "application/json",
			data: JSON.stringify({username}),
			success: update,
			error: (err) => console.log(err)
		})
	};

	return (
		<Search postRepos={postRepos}/>
	)
}

reactDom.render(<App />, (document.getElementById('root')));