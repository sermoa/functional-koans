var jstestdriver, koans; //globals

koans.add("About Functions", "Function Declaration", function () {
	
	function add(a, b) {
		return a + b;
	}
	
	assertEquals(__, add(1, 2));

});

koans.add("About Functions", "Internal Variables Override Outer Variables", function () {
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
});

koans.add("About Functions", "Lexical Scoping", function () {
	var variable = "top-level";
	function parentfunction() {
	    var variable = "local";
		function childfunction() {
		    return variable;
		}
		return childfunction();
	}
	assertEquals(__, parentfunction());
});

koans.add("About Functions", "Using Lexical Scoping To Synthesise Functions", function () {
	
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
});

koans.add("About Functions", "Extra Function Arguments", function () {
	
	function returnFirstArg(firstArg)
	{
		return firstArg;
	}
	
	assertEquals(__, returnFirstArg("first", "second", "third"));
	
	function returnSecondArg(firstArg, secondArg)
	{
		return secondArg;
	}
	
	assertEquals(__, returnSecondArg("only give first arg"));
	
	function returnAllArgs()
	{
		var argsArray = [];
		for (var i = 0; i < arguments.length; i += 1) {
			argsArray.push(arguments[i]);
		}
		return argsArray.join(",");
	}
	
	assertEquals(__, returnAllArgs("first", "second", "third"));
});

koans.add("About Functions", "Functions As Values" function () {

	var appendRules = function (name) {
		return name + " rules!";
	};
	
	var appendDoubleRules = function (name) {
		return name + " totally rules!";
	};
	
	var praiseSinger = { givePraise: appendRules };
	assertEquals(__, praiseSinger.givePraise("John"));
	
	praiseSinger.givePraise = appendDoubleRules;
	assertEquals(__, praiseSinger.givePraise("Mary"));
		
});

koans.add("About Functions", "Function Body As A String", function () {
	var add = new Function("a", "b", "return a + b;");
	assertEquals(__, add(1, 2));
	 
	var multiply = function (a, b) {
		//An internal comment
		return a * b;
	};
	assertEquals(__, multiply.toString());
});

