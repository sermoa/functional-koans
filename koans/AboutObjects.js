describe("About Objects", function () {

  it("should confirm objects are collections of properties", function () {
    var aPerson = { firstname : "John", lastname: "Smith"  };
    
    expect("John", aPerson.firstname);
    expect("Smith").toBe(aPerson.lastname);
    expect(undefined).toBe(aPerson.lastName);
  }); 

  it("should know properties that are functions act like methods", function () {
    var aPerson = { 
        firstname : "John", 
        lastname: "Smith",
        calculateAge: function (birthYear) {
          var currentYear = 2010;
          return currentYear - birthYear;
        }
      };
    
    expect(33).toBe(aPerson.calculateAge(1977));
  });

  it("should confirm that when a function is attached to an object 'this' refers to object", function () {
    var aPerson = { 
        firstname : "John", 
        lastname: "Smith",
        birthYear: 1978,
        calculateAge: function () {
          var currentYear = 2010;
          return currentYear - this.birthYear; 
        }
      };
    
    expect(32).toBe(aPerson.calculateAge());
  });

  it("should use 'in' to check for the existance of properties", function () {
    var aPerson = { firstname : "John", lastname: "Smith"  };

    var checkIfGenderExists = function (object)
    {
      if ("gender" in object) { return true; }
      return false;
    };
    
    expect(false).toBe(checkIfGenderExists(aPerson));
  });

  it("should knaw that properties can be added and deleted", function () {
    var aPerson = { firstname : "John", lastname: "Smith"  };

    expect(false).toBe(("gender" in aPerson));
    expect(undefined).toBe(aPerson.gender);

    aPerson.gender = "male";
    expect(true).toBe(("gender" in aPerson));
    
    delete aPerson.gender;
    expect(false).toBe(("gender" in aPerson));
    expect(undefined).toBe(aPerson.gender);
  });


  it("should use prototype to add to all objects", function () {
      function Circle(radius)
      {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";
      
      expect(undefined).toBe(simpleCircle.colour);
      expect("red").toBe(colouredCircle.colour);
    
      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };
    
      expect("This circle has a radius of: 10").toBe(simpleCircle.describe());
      expect("This circle has a radius of: 5").toBe(colouredCircle.describe());
  });
});
