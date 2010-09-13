var jstestdriver, koans; //globals

koans.add("About Objects", "Objects Are Collections Of Properties", function () {
	var aPerson = { firstname : "John", lastname: "Smith"  };
	
	assertEquals("John", aPerson.firstname);
	assertEquals(__, aPerson.lastname);
	assertEquals(__, aPerson.lastName);
}); 

koans.add("About Objects", "Properties That Are Functions Act Like Methods", function () {
	var aPerson = { 
			firstname : "John", 
			lastname: "Smith",
			calculateAge: function (birthYear) {
				var currentYear = 2010;
				return currentYear - birthYear;
			}
		};
	
	assertEquals(__, aPerson.calculateAge(1977));
});

koans.add("About Objects", "When Function Attached To Object this Refers To Object", function () {
	var aPerson = { 
			firstname : "John", 
			lastname: "Smith",
			birthYear: 1978,
			calculateAge: function () {
				var currentYear = 2010;
				return currentYear - this.birthYear; 
			}
		};
	
	assertEquals(__, aPerson.calculateAge());
});

koans.add("About Objects", "Use in To Check For The Existance Of Properties", function () {
	var aPerson = { firstname : "John", lastname: "Smith"  };

	var checkIfGenderExists = function (object)
	{
		if ("gender" in object) { return true; }
		return false;
	};
	
	assertEquals(__, checkIfGenderExists(aPerson));
});

koans.add("About Objects", "Properties Can Be Added And Deleted", function () {
	var aPerson = { firstname : "John", lastname: "Smith"  };

	assertEquals(__, ("gender" in aPerson));
	assertEquals(__, aPerson.gender);

	aPerson.gender = "male";
	assertEquals(__, ("gender" in aPerson));
	
	delete aPerson.gender;
	assertEquals(__, ("gender" in aPerson));
	assertEquals(__, aPerson.gender);
});


koans.add("About Objects", "Prototype Adds To All Objects", function () {
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
});

