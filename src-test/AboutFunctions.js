AboutFunctions = TestCase("AboutFunctions");

AboutFunctions.prototype.testFunctionDeclaration = function() {
	
	function add(a, b) {
		return a + b;
	}
	
	assertEquals(__, add(1,2));

};

AboutFunctions.prototype.testInternalVariablesOverrideOuterVariables = function() {
	var message = "Outer";
	
	function getMessage() {
		return message;
	}
	
	function overrideMessage() {
		var message = "Inner";
		return message;
	}
	
	assertEquals(__, getMessage());
	assertEquals(__, overrideMessage());
	assertEquals(__, message);
};

AboutFunctions.prototype.testLexicalScoping = function() {
	var variable = "top-level";
	function parentFunction() {
	  var variable = "local";
	  function childFunction() {
	    return variable;
	  }
	  return childFunction();
	}
	assertEquals(__,parentFunction());
};

AboutFunctions.prototype.testUsingLexicalScopingToSynthesiseFunctions = function() {
	
	function makeIncreaseByFunction(increaseByAmount)
	{
		var increaseByFunction = function increaseBy(numberToIncrease)
		{
			return numberToIncrease + increaseByAmount;
		};
		return increaseByFunction;
	}
	
	var increaseBy3 = makeIncreaseByFunction(3);
	var increaseBy5 = makeIncreaseByFunction(5);
	
	assertEquals(__, increaseBy3(10) + increaseBy5(10));
};

AboutFunctions.prototype.testExtraFunctionArguments = function() {
	
	function returnFirstArg(firstArg)
	{
		return firstArg;
	}
	
	assertEquals(__, returnFirstArg("first","second","third"));
	
	function returnSecondArg(firstArg, secondArg)
	{
		return secondArg;
	}
	
	assertEquals(__, returnSecondArg("only give first arg"));
	
	function returnAllArgs()
	{
		var argsArray = [];
		for (i=0; i<arguments.length; i++)
			argsArray.push(arguments[i]);
		return argsArray.join(",");
	}
	
	assertEquals(__, returnAllArgs("first", "second", "third"));
};

AboutFunctions.prototype.testFunctionsAsValues = function() {

	var appendRules = function(name) {
		return name + " rules!";
	};
	
	var appendDoubleRules = function(name) {
		return name + " totally rules!";
	};
	
	var praiseSinger = { givePraise: appendRules };
	assertEquals(__, praiseSinger.givePraise("John"));
	
	praiseSinger.givePraise = appendDoubleRules;
	assertEquals(__, praiseSinger.givePraise("Mary"));
		
};

AboutFunctions.prototype.testFunctionBodyAsAString = function() {
	var add = new Function("a", "b", "return a + b;");
	assertEquals(__, add(1,2));
	
	var multiply = function(a,b) {
		//An internal comment
		return a * b;
	};
	assertEquals(__, multiply.toString());
};

