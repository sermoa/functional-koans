//We shall contemplate truth by testing reality, via asserts.
test("Assert True", function () {
	ok(false);  // This should be true 
});        
     
//Enlightenment may be more easily achieved with appropriate messages.
test("Assert With Message", function () {
	ok(false,"This should be true -- Please fix this"); 
});

//To understand reality, we must compare our expectations against reality.
test("Assert Equality", function () { 
	var expectedValue = 2;
	var actualValue = 1 + __;
	
	ok(expectedValue === actualValue);
});

//Some ways of asserting equality are better than others.
test("A Better Way Of Asserting Equality", function () {
	var expectedValue = 2;
	var actualValue = 1 + __;
	
	equals(expectedValue, actualValue);
});

//Sometimes we will ask you to fill in the values
test("Fill In Values", function () {
	equals(__, 1 + 1);
});
