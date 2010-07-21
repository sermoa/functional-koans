var dojo; //global variables

var AboutFilter = new TestCase("AboutFilter");

AboutFilter.prototype.testFilterCreatesANewArrayUsingPredicate = function () {
	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var odd = dojo.filter(numbers, function(x) { if (x % 2 !== 0) { return true; } return false; });
	
	assertEquals(__, odd);
	assertEquals(__, odd.length);
	assertEquals(__, numbers.length);
};

