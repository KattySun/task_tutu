"use strict";

// Задача №2
(function () {

	console.log('****** Task 2 ******');

	function checkSyntax(str) {
		var brackets = "[]{}()<>",
			stack = [], 
			pos;

		for(var i = 0; i < str.length; i++) {
			
			pos = brackets.indexOf(str[i]);

			if(pos === -1) {
				continue;
			}

			if(pos % 2 === 0) {
				stack.push(pos + 1); 
			} else {
				if(stack.pop() !== pos) {
					return 1;
				}
			}
		}

		return (stack.length === 0) ? 0: 1;
	}

	try {
		test(checkSyntax, ["---(++++)----"], 0);
		test(checkSyntax, [""], 0);
		test(checkSyntax, ["before ( middle []) after "], 0);
		test(checkSyntax, [") ("], 1);
		test(checkSyntax, ["} {"], 1);
		test(checkSyntax, ["<(   >)"], 1);
		test(checkSyntax, ["(  [  <>  ()  ]  <>  )"], 0);
		test(checkSyntax, ["   (      [)"], 1);

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
