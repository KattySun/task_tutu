"use strict";

// Задача №6
(function () {

	console.log('****** Task 6 ******');

	function parseUrl(str) {
		var url = document.createElement('a');
		url.href = str;
		return url
	}

	let a = parseUrl('http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')

	console.log( a.href == "http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
	console.log( a.hash == "#foo" )
	console.log( a.port == "8080" )
	console.log( a.host == "tutu.ru:8080" )
	console.log( a.protocol == "http:" )
	console.log( a.hostname == "tutu.ru" )
	console.log( a.pathname == "/do/any.php" )
	console.log( a.origin == "http://tutu.ru:8080" )

	console.log('\n');

}) ()