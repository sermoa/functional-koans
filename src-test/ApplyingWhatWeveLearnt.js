var dojox, jstestdriver; //global variables
var df = dojox.lang.functional;    

var AboutHigherOrderFunctions = new TestCase("ApplyingWhatWeveLearnt", {
	
	/***********************************************************************************/
	operations : [    { direction: "RT", distance: 200},
	                  { direction: "FWD", distance: 50},
	                  { direction: "RT", distance: 100},
	                  { direction: "RT", distance: 20},
	                  { direction: "FWD", distance: 200},
	                  { direction: "RT", distance: 10}
	              ],
	
	testFindNeedleInHaystack_Imperative: function () {
	
		var findNeedle = function (ops) {
			var hasInvalidOperation = false;
			for (var i = 0; i < ops.length; i+=1) { 
			    if (ops[i].direction === "FWD" && ops[i].distance > 100) { 
			    	hasInvalidOperation = true; 
			        break; 
			    }	
			} 
		};
		
		assertEquals(__, findNeedle(this.operations));
	},
	
	testFindNeedleInHaystack_Functional: function () {
		assertEquals(__, df.some(this.operations, "x.direction === 'FWD' && x.distance > 100"));
	},
	
	/***********************************************************************************/
	
	testAddAllTheNaturalNumbersBelow1000ThatAreMultiplesOf3Or5_Imperative: function () {
		
		var sum = 0;
		for(var i=1; i<=1000; i+=1) {
			if (i % 3 === 0 || i % 5 === 0) {
				sum += i;
			}
		}
		
		assertEquals(234168, sum);
	},
	
	testAddAllTheNaturalNumbersBelow1000ThatAreMultiplesOf3Or5_Functional: function () {
		var sumIfMultipleOf3Or5 = function (sum, next) {
			if (next % 3 === 0 || next % 5 === 0) {
				return sum + next;
			}
			return sum;	
		};
		var numbers = df.repeat(1000, "+1", 1);

		assertEquals(234168, df.reduce(numbers, sumIfMultipleOf3Or5, 0));
	},
 
	/***********************************************************************************/
	
	testFindTheSumOfAllTheEvenValuedTermsInTheFibonacciSequenceWhichDoNotExceedFourMillion: function () {
		
	},
	
	testFindTheLargestPrimeFactorOfACompositeNumber: function () {
		
	},
	
	testFindTheLargestPalindromeMadeFromTheProductOfTwo3DigitNumbers: function () {
		
	},
	
	testWhatIsTheSmallestNumberDivisibleByEachOfTheNumbers1to20: function () {
		
	},
	
	testWhatIsTheDifferenceBetweenTheSumOfTheSquaresAndTheSquareOfTheSums: function () {
		
	},
	
	testFindThe10001stPrime: function () {
		
	}

});