"use strict";

// Задача №1
// нужно сократить число вычислений
// (function () {
// 	function dscount(str, a, b) {
// 		var count = 0,
// 			a = a.toUpperCase(),
// 			b = b.toUpperCase(),
// 			str = str.toUpperCase(),
// 			pos = str.indexOf(a),
// 			posB = 0
// 		while ( pos != -1 ) {
// 			posB = str.indexOf(b,pos+1);
			
// 			if (pos+1 == posB)
// 				count++;
			
// 			pos = str.indexOf(a,pos+1);
// 		}
// 		return count;
// 	}

// 	// Для удобства можно использовать эти тесты:
// 	try {
// 		test(dscount, ['ab___ab__', 'a', 'b'], 2);
// 		test(dscount, ['___cd____', 'c', 'd'], 1);
// 		test(dscount, ['de_______', 'd', 'e'], 1);
// 		test(dscount, ['12_12__12', '1', '2'], 3);
// 		test(dscount, ['_ba______', 'a', 'b'], 0);
// 		test(dscount, ['_a__b____', 'a', 'b'], 0);
// 		test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
// 		test(dscount, ['aAa', 'a', 'a'], 2);

// 		console.info("Congratulations! All tests success passed.");
// 	} catch(e) {
// 		console.error(e);
// 	}

// 	// Простая функция тестирования
// 	function test(call, args, count, n) {
// 		let r = (call.apply(n, args) === count);
// 		console.assert(r, `Finded items count: ${count}`);
// 		if (!r) throw "Test failed!";
// 	}
// })();


// Задача №2
// (function () {
// 	function checkSyntax(str) {
// 		var brackets = "[]{}()<>",
// 			stack = [], 
// 			pos;

// 		for(var i = 0; i < str.length; i++) {
			
// 			pos = brackets.indexOf(str[i]);

// 			if(pos === -1) {
// 				continue;
// 			}

// 			if(pos % 2 === 0) {
// 				stack.push(pos + 1); 
// 			} else {
// 				if(stack.pop() !== pos) {
// 					return 1;
// 				}
// 			}
// 		}

// 		return (stack.length === 0) ? 0: 1;
// 	}

// 	try {
// 		test(checkSyntax, ["---(++++)----"], 0);
// 		test(checkSyntax, [""], 0);
// 		test(checkSyntax, ["before ( middle []) after "], 0);
// 		test(checkSyntax, [") ("], 1);
// 		test(checkSyntax, ["} {"], 1);
// 		test(checkSyntax, ["<(   >)"], 1);
// 		test(checkSyntax, ["(  [  <>  ()  ]  <>  )"], 0);
// 		test(checkSyntax, ["   (      [)"], 1);

// 		console.info("Congratulations! All tests success passed.");
// 	} catch(e) {
// 		console.error(e);
// 	}

// 	// Простая функция тестирования
// 	function test(call, args, count, n) {
// 		let r = (call.apply(n, args) === count);
// 		console.assert(r, `Finded items count: ${count}`);
// 		if (!r) throw "Test failed!";
// 	}
// })();



// Задача №3
/*
Исходные данные - блин [1, 2, 3]
1 итерация: обжарка [1, 2] блинов на  2-х сковородках с одной стороны - 1 минута
2 итерация: 1 из блинов откаладывается в сторону, на его место выкладывается [3] блин, а [2] переворачивается и жарится с другой стороны - 1 минута
3 итерация: Блин [2] готов, на его место возвращается блин [1] и жарится с необжаренной стороны. Блин [3] переворачивается - 1 минута
*/
(function () {
	var pancakes = [
		{sidesDone: [ false, false]},
		{sidesDone: [ false, false]},
		{sidesDone: [ false, false]}
	],
	pancake;
	function fry (pancakes, pans) {
		for (var i = 0; pancake = pancakes[i]; i++) {
			console.log(i);
			setTimeout(function() {console.log('done');return true}, 1000);
		}
	}

	fry(pancakes, 2);

}) ()


// Задача №4
// тут идет определение какой символ в строке расположен дальше (имеет более высокий индекс)
// (function () {
// 	function func(s, a, b) {

// 		if (s.match(/^$/)) {
// 			return -1;
// 		}

// 		var i = s.length -1;
// 		var aIndex =     -1;
// 		var bIndex =     -1;

// 		while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
// 			console.log(s);
// 			if (s.substring(i, i +1) == a) {
// 				aIndex = i;
// 				console.log('aIndex='+aIndex, a);
// 			}
// 			if (s.substring(i, i +1) == b) {
// 				bIndex = i;
// 				console.log('bIndex='+bIndex, b);
// 			}
// 			i = i - 1;
// 		}

// 		if (aIndex != -1) {
// 			if (bIndex == -1) {
// 				return aIndex;
// 			}
// 			else {
// 				return Math.max(aIndex, bIndex);
// 			}
// 		}

// 		if (bIndex != -1) {
// 			return bIndex;
// 		}
// 		else {
// 			return -1;
// 		}
// 	}

// 	function newFunc(s, a, b) {
// 		return Math.max(s.lastIndexOf(a), s.lastIndexOf(b))
// 	}

// }) ()

// Задача №5
// (function () {
// 	function drawRating(vote) {
// 		if (vote >= 0 && vote <= 20) {
// 			return '★☆☆☆☆';
// 		}
// 		else if (vote > 20 && vote <= 40) {
// 			return '★★☆☆☆';
// 		}
// 		else if (vote > 40 && vote <= 60) {
// 			return '★★★☆☆';
// 		}
// 		else if (vote > 60 && vote <= 80) {
// 			return '★★★★☆';
// 		}
// 		else if (vote > 80 && vote <= 100) {
// 			return '★★★★★';
// 		}
// 	}

// 	function newDrawRating(vote) {
// 		var point = (vote != 0) ? Math.ceil(vote/20) : 1
// 		return Array(point+1).join("★") + Array(6-point).join("☆")
// 	}

// 	// Проверка работы результата
// 	console.log(newDrawRating(0) ); // ★☆☆☆☆
// 	console.log(newDrawRating(1) ); // ★☆☆☆☆
// 	console.log(newDrawRating(21) ); // ★★☆☆☆
// 	console.log(newDrawRating(41) ); // ★★★☆☆
// 	console.log(newDrawRating(50)); // ★★★☆☆
// 	console.log(newDrawRating(80)); // ★★★★☆
// 	console.log(newDrawRating(99)); // ★★★★★

// }) ()

// Задача №6
// (function () {
// 	function parseUrl(str) {
// 		var url = document.createElement('a');
// 		url.href = str;
// 		return url
// 	}

// 	let a = parseUrl('http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')

// 	// Вернет объект, в котором будут следующие свойства:
// 	console.log( a.href == "http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
// 	console.log( a.hash == "#foo" )
// 	console.log( a.port == "8080" )
// 	console.log( a.host == "tutu.ru:8080" )
// 	console.log( a.protocol == "http:" )
// 	console.log( a.hostname == "tutu.ru" )
// 	console.log( a.pathname == "/do/any.php" )
// 	console.log( a.origin == "http://tutu.ru:8080" )

// }) ()