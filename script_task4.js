"use strict";

// Задача №4
(function () {

	console.log('****** Task 4 ******');


	//*********
	function newFunc(s, a, b) {
		return Math.max(s.lastIndexOf(a), s.lastIndexOf(b))
	}
	//********


	function func(s, a, b) {

		if (s.match(/^$/)) {
			return -1;
		}

		var i = s.length -1;
		var aIndex =     -1;
		var bIndex =     -1;

		while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
			if (s.substring(i, i +1) == a) {
				aIndex = i;
			}
			if (s.substring(i, i +1) == b) {
				bIndex = i;
			}
			i = i - 1;
		}

		if (aIndex != -1) {
			if (bIndex == -1) {
				return aIndex;
			}
			else {
				return Math.max(aIndex, bIndex);
			}
		}

		if (bIndex != -1) {
			return bIndex;
		}
		else {
			return -1;
		}
	}


	try {
		test(func, ['dfajskdf', 'k', 'f'], newFunc('dfajskdf', 'k', 'f'));
		test(func, ['', 'k', 'f'], newFunc('', 'k', 'f'));
		test(func, ['dfajskdf', 'a', 'e'], newFunc('dfajskdf', 'a', 'e'));
		test(func, ['dfajskdf', 'e', 'e'], newFunc('dfajskdf', 'e', 'e'));

		console.info("Congratulations! All tests success passed.");
	} catch(e) {
		console.error(e);
	}

	function test(call, args, count, n) {
		let r = (call.apply(n, args) === count);
		console.assert(r, `Finded items count: ${count}`);
		if (!r) throw "Test failed!";
	}

	console.log('\n');

}) ()