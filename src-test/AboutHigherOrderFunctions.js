var dojox, jstestdriver; //global variables
var df = dojox.lang.functional;    

var AboutHigherOrderFunctions = new TestCase("AboutHigherOrderFunctions", {

	setUp : function () {
		this.numbers = [1,2,3];
	},
	
	testFilterCreatesNewArrayFromSourceArraySuchThatFunctionOfItemReturnsTrue : function () {
		var odd = df.filter(this.numbers, "x % 2 !== 0");
		
		assertEquals(__, odd);
		assertEquals(__, odd.length);
		assertEquals(__, this.numbers.length);
	},
	
	testMapApplysFunctionToEachElement : function () {
		var numbersPlus1 = df.map(this.numbers, "x + 1");
		
		assertEquals(__, numbersPlus1);
		assertEquals(__, this.numbers);
	},
	
	testReduceApplysFunctionToResultAndNextItem : function () {
		var reduction = df.reduce(this.numbers, "result + x");
		
		assertEquals(__, reduction); 
		assertEquals(__, this.numbers);
	},
	
	testForEach : function () {
		df.forEach(this.numbers, function(x) { jstestdriver.console.log(x);});
		
		//forEach doesn't return anything, so see see the console
		assertEquals(__,this.numbers);
	}, 
	
	testSomeAppliesUntilTrue : function () {
		var msg = "";
		var isEven = function (item) {
			msg += item + ";";
			return (item % 2) === 0;
		};
		
		assertEquals(true, this.numbers.some(isEven));
		assertEquals(__, msg);
	},
	
	testEveryAppliesUntilFirstFalse : function () {
		var msg = "";
		var isEven = function (item) {
			msg += item + ";";
			return (item % 2) === 0;
		};
		
		assertEquals(false, this.numbers.every(isEven));
		assertEquals(__, msg);
	}
});


