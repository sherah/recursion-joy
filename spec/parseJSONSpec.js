// test cases are described in fixtures.js
describe("parseJSON", function(){

  it("should match the result of calling JSON.parse", function(){
    validStrings.forEach(function(test){
      var result = parseJSON(test);
      var expected = JSON.parse(test);
      console.log("this is what it's supposed to be: " + expected + '\nthis is what it is: ' + result);
      var equality = _.isEqual(result, expected); // why can't we use `===` here?
      expect(equality).toBeTruthy();
    });
  })

  it("should error out sometimes", function(){
    invalidStrings.forEach(function(test){
      // expect(parseJSON(test)).toBe(undefined); // you can use this test if you'd prefer
      expect(function(){
        parseJSON(test);
      }).toThrow();
    });
  })

});

// "undefined" : "undefined" 
// "foo" : "" 
// "undefined" : "undefined" 
// "foo" : "bar" 
// "0" : "one" 
// "a" : "b" 
// "0" : "null" 
// "foo" : "true" 
// "0" : "1" 
// "boolean, true" : "true" 
// "a" : "[object Object]" 
// "a" : "b,c" 
// "0" : "[object Object]" 
// "a" : "" 
// "0" : "foo" 
// "0" : "\""a"" 
// "0" : "and you can't escape this" 
// "CoreletAPIVersion" : "2" 
// "firstName" : "John" 
// "glossary" : "[object Object]" 
// "functions" : "function (){}" 
// this is what it's supposed to be:  
// this is what it's supposed to be: [object Object] 
// this is what it's supposed to be: [object Object] 
// this is what it's supposed to be: [object Object] 
// this is what it's supposed to be: one,two 
// this is what it's supposed to be: [object Object] 
// this is what it's supposed to be: ,false,true 
// this is what it's supposed to be: [object Object] 
// this is what it's supposed to be: 1,0,-1,-0.3,0.3,1343.32,3345,0.00011999999999999999 
// this is what it's supposed to be: [object Object] 
// this is what it's supposed to be: [object Object] 
// this is what it's supposed to be: [object Object] 
// this is what it's supposed to be: [object Object],[object Object] 
// this is what it's supposed to be: [object Object] 
// this is what it's supposed to be: foo 
// this is what it's supposed to be: \""a" 
// this is what it's supposed to be: and you can't escape this 
// this is what it's supposed to be: [object Object] 
// this is what it's supposed to be: [object Object] 
// this is what it's supposed to be: [object Object]