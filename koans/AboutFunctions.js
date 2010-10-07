describe("About Functions", function() {

  it("should declare functions", function() {
    
    function add(a, b) {
      return a + b;
    }
    
    expect(3).toBe(add(1, 2));

  });

  it("should know internal wariables override outer variables", function () {
    var message = "Outer";
    
    function getMessage() {
      return message;
    }
    
    function overrideMessage() {
      var message = "Inner";
      return message;
    }
    
    expect("Outer").toBe(getMessage());
    expect("Inner").toBe(overrideMessage());
    expect("Outer").toBe(message);
  });

  it("should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
        var variable = "local";
      function childfunction() {
          return variable;
      }
      return childfunction();
    }
    expect("local").toBe(parentfunction());
  });

  it("should use lexical scoping to synthesise functions", function () {
    
    function makeIncreaseByFunction(increaseByAmount)
    {
      var increaseByFunction = function increaseBy(numberToIncrease)
      {
        return numberToIncrease + increaseByAmount;
      };
      return increaseByFunction;
    }
    
    var increaseBy3 = makeIncreaseByFunction(3);
    var increaseBy5 = makeIncreaseByFunction(5);
    
    expect(28).toBe(increaseBy3(10) + increaseBy5(10));
  });

  it("should allow extra function arguments", function () {
    
    function returnFirstArg(firstArg)
    {
      return firstArg;
    }
    
    expect("first").toBe(returnFirstArg("first", "second", "third"));
    
    function returnSecondArg(firstArg, secondArg)
    {
      return secondArg;
    }
    
    expect(undefined).toBe(returnSecondArg("only give first arg"));
    
    function returnAllArgs()
    {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }
    
    expect("first,second,third").toBe(returnAllArgs("first", "second", "third"));
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };
    
    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };
    
    var praiseSinger = { givePraise: appendRules };
    expect("John rules!").toBe(praiseSinger.givePraise("John"));
    
    praiseSinger.givePraise = appendDoubleRules;
    expect("Mary totally rules!").toBe(praiseSinger.givePraise("Mary"));
      
  });

  it("should use function body as a string", function () {
    var add = new Function("a", "b", "return a + b;");
    expect(3).toBe(add(1, 2));
     
    var multiply = function (a, b) {
      //An internal comment
      return a * b;
    };
    //expect("return a * b;").toBe(multiply.toString());
  });    
});
