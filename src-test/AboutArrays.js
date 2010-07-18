AboutArrays = TestCase("AboutArrays");

AboutArrays.prototype.testCreatingArrays = function() {
	var emptyArray = new Array();
	assertEquals(__, typeof(emptyArray)); //A mistake? - http:javascript.crockford.com/remedial.html
	assertEquals(__, emptyArray.length);
	    
	var multiTypeArray = [0, 1,"two", function() {return 3;}, {value1:4, value2:5}, [6,7]];
	assertEquals(__, multiTypeArray[0]);
	assertEquals(__, multiTypeArray[2]);
	assertEquals(__, multiTypeArray[3]());
	assertEquals(__, multiTypeArray[4].value1);
	assertEquals(__, multiTypeArray[4]["value2"]);
	assertEquals(__, multiTypeArray[5][0]);
};

AboutArrays.prototype.testArrayLiterals = function() {
	var array = new Array();
	assertEquals([], array);
	
	array[0] = 1;
	assertEquals [1], array;
	
	array[1] = 2;
	assertEquals([1,__], array);
	
	array.push(3);
	assertEquals(__, array);
};

AboutArrays.prototype.testAccessingArrayElements = function() {
	var array = ["peanut", "butter", "and", "jelly"];
	
	assertEquals(__, array[0]);
	assertEquals(__, array[3]);
	assertEquals(__, array[array.length - 1]); 
	assertEquals(__, array[-1]);
};

AboutArrays.prototype.testArrayLength = function() {
	var fourNumberArray = [1,2,3,4];
	
	assertEquals(__, fourNumberArray.length);
	fourNumberArray.push(5,6);
	assertEquals(__,fourNumberArray.length);
	
	var tenEmptyElementArray = new Array(10); 
	assertEquals(__, tenEmptyElementArray.length);
	
	tenEmptyElementArray.length = 5;
	assertEquals(__, tenEmptyElementArray.length);
	
};

AboutArrays.prototype.testSlicingArrays = function() {
	var array = ["peanut", "butter", "and", "jelly"];
	
	assertEquals(__, array.slice(0, 1));
	assertEquals(__, array.slice(0,2));
	assertEquals(__, array.slice(2,2));
	assertEquals(__, array.slice(2,20));
	assertEquals(__, array.slice(3,0));
	assertEquals(__, array.slice(3,100));
	assertEquals(__, array.slice(5,1));
};

AboutArrays.prototype.testArraysReferences = function() {
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
};

AboutArrays.prototype.testArrayPushAndPop = function() {
	var array = [1,2];
	array.push(3);

	assertEquals(__, array);
	
	var poppedValue = array.pop();
	assertEquals(__, poppedValue);
	assertEquals(__, array);
};

AboutArrays.prototype.testShiftingArrays = function() {
	var array = [1,2];

	array.unshift(3);
	assertEquals(__, array);
	
	var shiftedValue = array.shift();
	assertEquals(__,shiftedValue);
	assertEquals(__, array);
};
