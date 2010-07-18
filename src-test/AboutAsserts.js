AboutAsserts = TestCase("AboutAsserts");

//We shall contemplate truth by testing reality, via asserts.
AboutAsserts.prototype.testAssertTrue = function() {
	assert(false);  // This should be true
};

//Enlightenment may be more easily achieved with appropriate messages.
AboutAsserts.prototype.testAssertWithMessage = function() {
	assert("This should be true -- Please fix this", false);
};

//To understand reality, we must compare our expectations against reality.
AboutAsserts.prototype.testAssertEquality = function() {
	var expectedValue = 2;
	var actualValue = 1 + __;
	
	assert(expectedValue == actualValue);
};

//Some ways of asserting equality are better than others.
AboutAsserts.prototype.testABetterWayOfAssertingEquality = function() {
	var expectedValue = 2;
	var actualValue = 1 + __;
	
	assertEquals(expectedValue, actualValue);
};

//Sometimes we will ask you to fill in the values
AboutAsserts.prototype.testFillInValues = function() {
	assertEquals(__, 1+1);
};
