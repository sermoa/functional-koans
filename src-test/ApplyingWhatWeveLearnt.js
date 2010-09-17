var jstestdriver, koans, dojox; //globals
var df = dojox.lang.functional;    

var operations = [    { direction: "RT", distance: 200},
	              { direction: "FWD", distance: 50},
	              { direction: "RT", distance: 100},
	              { direction: "RT", distance: 20},
	              { direction: "FWD", distance: 200},
	              { direction: "RT", distance: 10}
	         ],
	/***********************************************************************************/
koans.add("Applying What We've Learnt","Find Needle In Haystack (Imperative)", function () {
	
	var findNeedle = function (ops) {
		var hasInvalidOperation = false;
		for (var i = 0; i < ops.length; i+=1) { 
		    if (ops[i].direction === "FWD" && ops[i].distance > 100) { 
		    	hasInvalidOperation = true; 
		        break; 
		    }	
		}

    return hasInvalidOperation;
	};
	
	assertEquals(__, findNeedle(this.operations));
});

koans.add("Applying What We've Learnt","Find Needle In Haystack (Functional)", function () {
		assertEquals(__, df.some(this.operations, "x.direction === 'FWD' && x.distance > 100"));
	
	});
	/***********************************************************************************/

koans.add("Applying What We've Learnt","Add All The Natural Numbers Below 1000 That Are Multiples Of 3 Or 5 (Imperative)", function () {
	
	var sum = 0;
	for(var i=1; i<=1000; i+=1) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	
	assertEquals(__, sum);
});

koans.add("Applying What We've Learnt","Add All The Natural Numbers Below 1000 That Are Multiples Of 3 Or 5 (Functional)", function () {
	var sumIfMultipleOf3Or5 = function (sum, next) {
		if (next % 3 === 0 || next % 5 === 0) {
			return sum + next;
		}
		return sum;	
	};
	var numbers = df.repeat(1000, "+1", 1);

	assertEquals(__, df.reduce(numbers, sumIfMultipleOf3Or5, 0));


});

	/***********************************************************************************/

koans.add("Applying What We've Learnt","Find The Sum Of All The Even Valued Terms In The Fibonacci Sequence Which Do Not Exceed Four Million (Imperative)", function () {
	var sum = 0;
	var fib = [0,1,1];
    	var i = 3;	
    	var currentFib = 0;
	do {
		currentFib = fib[i] = fib[i-1] + fib[i-2];
		if (currentFib % 2 === 0) {
			sum += currentFib;
		}
		i+=1;
	} while (currentFib < 4000000);
	
	assertEquals(__, sum);

});

koans.add("Applying What We've Learnt","Find The Sum Of All The Even Valued Terms In The Fibonacci Sequence Which Do Not Exceed Four Million (Functional)", function () {
	var calcNextFibTuple = function(item, index, array) {
		return [item[1], item[0]+item[1]];
	};
	var addEven = function(result, item) {
		if (item[0]  % 2 === 0) { 
			return result + item[0];
		}
		return result;
	};
	var fib = df.until("item[0] > 4000000", calcNextFibTuple, [0,1]);
	var sum = df.reduce(fib, addEven, 0);
	
	assertEquals(__, sum);
});
	/***********************************************************************************/

koans.add("Applying What We've Learnt","FindTheLargestPrimeFactorOfACompositeNumber:(Imperative)", function () {
	
});

koans.add("Applying What We've Learnt","FindTheLargestPalindromeMadeFromTheProductOfTwo3DigitNumbers:(Imperative)", function () {
	
});

koans.add("Applying What We've Learnt","WhatIsTheSmallestNumberDivisibleByEachOfTheNumbers1to20:(Imperative)", function () {
		
	
});

koans.add("Applying What We've Learnt","WhatIsTheDifferenceBetweenTheSumOfTheSquaresAndTheSquareOfTheSums:(Imperative)", function () {
	
});

koans.add("Applying What We've Learnt","FindThe10001stPrime:(Imperative)", function () {

});
