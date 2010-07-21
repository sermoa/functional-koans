var AboutObjects = new TestCase("AboutObjects");

AboutObjects.prototype.testObjectAreCollectionsOfProperties = function () {
	var aPerson = { firstname : "John", lastname: "Smith"  };
	
	assertEquals("John", aPerson.firstname);
	assertEquals(__, aPerson.lastname);
	assertEquals(__, aPerson.lastName);
}; 

AboutObjects.prototype.testPropertiesThatAreFunctionsActLikeMethods = function () {
	var aPerson = { 
			firstname : "John", 
			lastname: "Smith",
			calculateAge: function (birthYear) {
				var currentYear = new Date().getFullYear();
				return currentYear - birthYear;
			}
		};
	
	assertEquals(__, aPerson.calculateAge(1977));
};

AboutObjects.prototype.testWhenFunctionAttachedToObjectThisRefersToObject = function () {
	var aPerson = { 
			firstname : "John", 
			lastname: "Smith",
			birthYear: 1978,
			calculateAge: function () {
				var currentYear = new Date().getFullYear();
				return currentYear - this.birthYear; 
			}
		};
	
	assertEquals(__, aPerson.calculateAge());
};

AboutObjects.prototype.testUseInToCheckForTheExistanceOfProperties = function () {
	var aPerson = { firstname : "John", lastname: "Smith"  };

	var checkIfGenderExists = function (object)
	{
		if ("gender" in object) { return true; }
		return false;
	};
	
	assertEquals(__, checkIfGenderExists(aPerson));
};

AboutObjects.prototype.testPropertiesCanBeAddedAndDeleted = function () {
	var aPerson = { firstname : "John", lastname: "Smith"  };

	assertEquals(__, ("gender" in aPerson));
	assertEquals(__, aPerson.gender);

	aPerson.gender = "male";
	assertEquals(__, ("gender" in aPerson));
	
	delete aPerson.gender;
	assertEquals(__, ("gender" in aPerson));
	assertEquals(__, aPerson.gender);
};


AboutObjects.prototype.testPrototypeAddsToAllObjects = function () {
    function Circle(radius)
    {
    	this.radius = radius;
    }

    var simpleCircle = new Circle(10);
    var colouredCircle = new Circle(5);
    colouredCircle.colour = "red";
    
	assertEquals(__, simpleCircle.colour);
	assertEquals(__, colouredCircle.colour);
	
	Circle.prototype.describe = function () {
		return "This circle has a radius of: " + this.radius;
	};
	
	assertEquals(__, simpleCircle.describe());
	assertEquals(__, colouredCircle.describe());
};

