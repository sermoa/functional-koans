var jstestdriver, koans, dojox; //globals
var df = dojox.lang.functional;    

koans.add("About Higher Order Functions","Filter Creates New Array From Source Array Such That Function Of Item Returns True", function () {
  var numbers = [1,2,3];
  var odd = df.filter(numbers, "x % 2 !== 0");
  
  assertEquals(__, odd);
  assertEquals(__, odd.length);
  assertEquals(__, numbers.length);
});
	
koans.add("About Higher Order Functions","Map Applys Function To Each Element", function () {
  var numbers = [1,2,3];
  var numbersPlus1 = df.map(numbers, "x + 1");
  
  assertEquals(__, numbersPlus1);
  assertEquals(__, numbers);
});
	
koans.add("About Higher Order Functions","Reduce Applys Function To Result And Next Item", function () {
  var numbers = [1,2,3];
  var reduction = df.reduce(numbers, "result + x");
  
  assertEquals(__, reduction); 
  assertEquals(__, numbers);
});
	
koans.add("About Higher Order Functions","forEach Applies function to each element", function () {
  var numbers = [1,2,3];
  var msg = "";
  var isEven = function (item) {
    msg += (item % 2) === 0;
  };

  df.forEach(numbers, isEven);
  
  assertEquals(__,msg);
  assertEquals(__,numbers);
});
	
koans.add("About Higher Order Functions","Some Applies Until True", function () {
  var numbers = [1,2,3];
  var msg = "";
  var isEven = function (item) {
    msg += item + ";";
    return (item % 2) === 0;
  };
  
  assertEquals(true, numbers.some(isEven));
  assertEquals(__, msg);
});
	
koans.add("About Higher Order Functions","Every Applies Until First False" , function () {
  var numbers = [1,2,3];
  var msg = "";
  var isEven = function (item) {
    msg += item + ";";
    return (item % 2) === 0;
  };
  
  assertEquals(false, numbers.every(isEven));
  assertEquals(__, msg);
});


