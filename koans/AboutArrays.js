describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.  
  it("should create arrays", function() {
    expect(false).toBeTruthy(); //This should be true
    var emptyArray = [];
    expect(__).toBe(typeof(emptyArray)); //A mistake? - http:javascript.crockford.com/remedial.html
    expect(__).toBe(emptyArray.length);
          
    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(__).toBe(multiTypeArray[0]);
    expect(__).toBe(multiTypeArray[2]);
    expect(__).toBe(multiTypeArray[3]());
    expect(__).toBe(multiTypeArray[4].value1);
    expect(__).toBe(multiTypeArray[4]["value2"]);
    expect(__).toBe(multiTypeArray[5][0]);
  });
});
