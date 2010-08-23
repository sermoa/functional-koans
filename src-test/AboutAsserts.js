var jstestdriver, koans; //globals

//We shall contemplate truth by testing reality, via asserts.
koans.add("About Asserts", "Assert True", function () {
	assert(false);  // This should be true 
});        
     
//Enlightenment may be more easily achieved with appropriate messages.
koans.add("About Asserts", "Assert With Message", function () {
	assert("This should be true -- Please fix this", false); 
});

//To understand reality, we must compare our expectations against reality.
koans.add("About Asserts", "Assert Equality", function () { 
	var expectedValue = 2;
	var actualValue = 1 + __;
	
	assert(expectedValue === actualValue);
});

//Some ways of asserting equality are better than others.
koans.add("About Asserts", "A Better Way Of Asserting Equality", function () {
	var expectedValue = 2;
	var actualValue = 1 + __;
	
	assertEquals(expectedValue, actualValue);
});

//Sometimes we will ask you to fill in the values
koans.add("About Asserts", "Fill In Values", function () {
	assertEquals(__, 1 + 1);
});
