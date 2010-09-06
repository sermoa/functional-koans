var jstestdriver, koans; //globals

koans.add("About Mutability", "Object Properties Are Public And Mutable", function () {
	var aPerson = {firstname: "John", lastname: "Smith" };
	aPerson.firstname = "Alan";
	
	assertEquals(__, aPerson.firstname);
});

koans.add("About Mutability", "Constructed Properties Are Public And Mutable", function () {
	function Person(firstname, lastname)
	{
		this.firstname = firstname;
		this.lastname = lastname;
	}
	var aPerson = new Person ("John", "Smith");
	aPerson.firstname = "Alan";
	
	assertEquals(__, aPerson.firstname);
});

koans.add("About Mutability", "Prototype Properies Are Public And Mutable", function () {
	function Person(firstname, lastname)
	{
		this.firstname = firstname;
		this.lastname = lastname;
	}
	Person.prototype.getFullName = function () {
		return this.firstname + " " + this.lastname;
	};
	
	var aPerson = new Person ("John", "Smith");
	assertEquals(__, aPerson.getFullName());
	
	aPerson.getFullName = function () {
		return this.lastname + ", " + this.firstname;
	};
	
	assertEquals(__, aPerson.getFullName());
});

koans.add("About Mutability", "Variables Inside Constructor And Constructor Args Are Private", function () {
	function Person(firstname, lastname)
	{
		var fullName = firstname + " " + lastname;
		
		this.getFirstName = function () { return firstname; };
		this.getLastName = function () { return lastname; };
		this.getFullName = function () { return fullName; };
	}
	var aPerson = new Person ("John", "Smith");

	aPerson.firstname = "Penny";
	aPerson.lastname = "Andrews";
	aPerson.fullName = "Penny Andrews";
	
	assertEquals(__, aPerson.getFirstName());
	assertEquals(__, aPerson.getLastName());
	assertEquals(__, aPerson.getFullName());

	aPerson.getFullName = function () {
		return lastname + ", " + firstname;
	};
	
	assertEquals(__, aPerson.getFullName());
});

