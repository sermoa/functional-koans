var jstestdriver, koans; //globals

koans.add("About Arrays", "Creating Arrays", function () {
	var emptyArray = [];
	assertEquals(__, typeof(emptyArray)); //A mistake? - http:javascript.crockford.com/remedial.html
	assertEquals(__, emptyArray.length);
	      
	var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
	assertEquals(__, multiTypeArray[0]);
	assertEquals(__, multiTypeArray[2]);
	assertEquals(__, multiTypeArray[3]());
	assertEquals(__, multiTypeArray[4].value1);
	assertEquals(__, multiTypeArray[4]["value2"]);
	assertEquals(__, multiTypeArray[5][0]);
});

koans.add("About Arrays", "Array Literals", function () {
	var array = [];
	assertEquals([], array);
	
	array[0] = 1;
	assertEquals([1], array);
	
	array[1] = 2;
	assertEquals([1, __], array);
	
	array.push(3);
	assertEquals(__, array);
});

koans.add("About Arrays", "Accessing Array Elements", function () {
	var array = ["peanut", "butter", "and", "jelly"];
	
	assertEquals(__, array[0]);
	assertEquals(__, array[3]);
	assertEquals(__, array[array.length - 1]); 
	assertEquals(__, array[-1]);
});

koans.add("About Arrays", "Array Length", function () {
	var fourNumberArray = [1, 2, 3, 4];
	
	assertEquals(__, fourNumberArray.length);
	fourNumberArray.push(5, 6);
	assertEquals(__, fourNumberArray.length);
	
	var tenEmptyElementArray = new Array(10); 
	assertEquals(__, tenEmptyElementArray.length);
	
	tenEmptyElementArray.length = 5;
	assertEquals(__, tenEmptyElementArray.length);
	
});

koans.add("About Arrays", "Slicing Arrays", function () {
	var array = ["peanut", "butter", "and", "jelly"];
	
	assertEquals(__, array.slice(0, 1));
	assertEquals(__, array.slice(0, 2));
	assertEquals(__, array.slice(2, 2));
	assertEquals(__, array.slice(2, 20));
	assertEquals(__, array.slice(3, 0));
	assertEquals(__, array.slice(3, 100));
	assertEquals(__, array.slice(5, 1));
});

koans.add("About Arrays", "Array References", function () {
	var array = [ "zero", "one", "two", "three", "four", "five" ];

	function passedByReference(refArray) {
	    refArray[1] = "changed in function";
	}
	passedByReference(array);
	assertEquals(__, array[1]);

	var assignedArray = array;
	assignedArray[5] = "changed in assignedArray";
	assertEquals(__, array[5]);

	var copyOfArray = array.slice();
	copyOfArray[3] = "changed in copyOfArray";
	assertEquals(__, array[3]);
});

koans.add("About Arrays", "Array Push And Pop", function () {
	var array = [1, 2];
	array.push(3);

	assertEquals(__, array);
	
	var poppedValue = array.pop();
	assertEquals(__, poppedValue);
	assertEquals(__, array);
});

koans.add("About Arrays", "Shifting Arrays", function () {
	var array = [1, 2];

	array.unshift(3);
	assertEquals(__, array);
	
	var shiftedValue = array.shift();
	assertEquals(__, shiftedValue);
	assertEquals(__, array);
});
