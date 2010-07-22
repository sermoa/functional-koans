var dojox; //global variables
var df = dojox.lang.functional;  

var AboutLambda = new TestCase("AboutLambda", {

	testTurnsExpressionStringIntoFunctionThatReturnsValueOfExpression : function () {
		assertEquals(__, df.lambda("1 + 2")());
	},
	
	testExpressionStringCanContainParams : function () {
		assertEquals(__, df.lambda("x + 2")(3));
	},

	testSeparatingParamsFromExpresion : function () {
		assertEquals(__, df.lambda("x, y -> y*2 + x*3")(2, 3));
	},
	
	testStringPassedToHigherOrderFunctionsAssumedToBeLambdas : function () {
		assertEquals(__, df.map([1, 2, 3], "x + 1"));
	}
});
