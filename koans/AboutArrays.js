describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.  
  it("should create arrays", function() {
    var emptyArray = [];
    expect('object').toBe(typeof(emptyArray)); //A mistake? - http:javascript.crockford.com/remedial.html
    expect(0).toBe(emptyArray.length);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(0).toBe(multiTypeArray[0]);
    expect('two').toBe(multiTypeArray[2]);
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
    expect([1, __]).toEqual(array);
    
    array.push(3);
    expect(__).toEqual(array);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(__).toBe(fourNumberArray.length);
    fourNumberArray.push(5, 6);
    expect(__).toBe(fourNumberArray.length);

    var tenEmptyElementArray = new Array(10); 
    expect(__).toBe(tenEmptyElementArray.length);

    tenEmptyElementArray.length = 5;
    expect(__).toBe(tenEmptyElementArray.length);
  });
});
