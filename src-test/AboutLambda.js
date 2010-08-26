var jstestdriver, koans, dojox; //global variables
var df = dojox.lang.functional;  

koans.add("About Lambda", "Turns Expression String Into Function That Returns Value Of Expression", function () {
		assertEquals(__, df.lambda("1 + 2")());
});
	
koans.add("About Lambda", "Test Expression String Can Contain Params", function () {
		assertEquals(__, df.lambda("x + 2")(3));
});

koans.add("About Lambda", "Test Separating Params From Expresion", function () {
		assertEquals(__, df.lambda("x, y -> y*2 + x*3")(2, 3));
});
	
koans.add("About Lambda", "Test String Passed To Higher Order Functions Assumed To Be Lambdas", function () {
		assertEquals(__, df.map([1, 2, 3], "x + 1"));
});

