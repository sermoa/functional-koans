describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.  
  it("should create arrays", function() {
    var emptyArray = [];
    expect('object').toBe(typeof(emptyArray)); //A mistake? - http:javascript.crockford.com/remedial.html
    expect(0).toBe(emptyArray.length);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(0).toBe(multiTypeArray[0]);
    expect("two").toBe(multiTypeArray[2]);
    expect(3).toBe(multiTypeArray[3]());
    expect(4).toBe(multiTypeArray[4].value1);
    expect(5).toBe(multiTypeArray[4]["value2"]);
    expect(6).toBe(multiTypeArray[5][0]);
  });

  it("should understand array literals", function () {
    var array = [];
    expect([]).toEqual(array);
    
    array[0] = 1;
    expect([1]).toEqual(array);
    
    array[1] = 2;
    expect([1, 2]).toEqual(array);
    
    array.push(3);
    expect([1, 2, 3]).toEqual(array);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(4).toBe(fourNumberArray.length);
    fourNumberArray.push(5, 6);
    expect(6).toBe(fourNumberArray.length);

    var tenEmptyElementArray = new Array(10); 
    expect(10).toBe(tenEmptyElementArray.length);

    tenEmptyElementArray.length = 5;
    expect(5).toBe(tenEmptyElementArray.length);
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];
    
    expect(["peanut"]).toEqual(array.slice(0, 1));
    expect(["peanut", "butter"]).toEqual(array.slice(0, 2));
    expect([]).toEqual(array.slice(2, 2));
    expect(["and", "jelly"]).toEqual(array.slice(2, 20));
    expect([]).toEqual(array.slice(3, 0));
    expect(["jelly"]).toEqual(array.slice(3, 100));
    expect([]).toEqual(array.slice(5, 1));
  });

  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect("changed in function").toBe(array[1]);

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect("changed in assignedArray").toBe(array[5]);

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect("three").toBe(array[3]);
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect([1, 2, 3]).toEqual(array);
    
    var poppedValue = array.pop();
    expect(3).toBe(poppedValue);
    expect([1, 2]).toEqual(array);
  });

  it("should shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);
    expect([3, 1, 2]).toEqual(array);
    
    var shiftedValue = array.shift();
    expect(3).toEqual(shiftedValue);
    expect([1,2]).toEqual(array);
  });  
});
