"use strict";

// Задача №1
(function () {

	console.log('****** Task 1 ******');

	function dscount(str, a, b) {
		var count = 0,
			pos = str.toUpperCase().indexOf(a.toUpperCase())
		while ( pos != -1 ) {
			
			pos += 1;
			
			if (pos == str.toUpperCase().indexOf(b.toUpperCase(), pos))
				count++;

			pos = str.toUpperCase().indexOf(a.toUpperCase(), pos);
		}
		return count;
	}


	try {
		test(dscount, ['ab___ab__', 'a', 'b'], 2);
		test(dscount, ['___cd____', 'c', 'd'], 1);
		test(dscount, ['de_______', 'd', 'e'], 1);
		test(dscount, ['12_12__12', '1', '2'], 3);
		test(dscount, ['_ba______', 'a', 'b'], 0);
		test(dscount, ['_a__b____', 'a', 'b'], 0);
		test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
		test(dscount, ['aAa', 'a', 'a'], 2);

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
})();