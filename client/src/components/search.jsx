import React from 'react';

var Search = (props) => {
	var handleSubmit = () => {
		var searchElement = document.getElementById("search");
		var username = searchElement.value;
		props.postRepos(username);
	}

	return (
		<div>
			<h1>Search!</h1>
		  <input id="search" type="text"></input>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	)
};

export default Search;