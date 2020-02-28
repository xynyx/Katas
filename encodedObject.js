const urlDecode = function(text) {
  // require() is actually a built-in function in Node.js
  // Its purpose is to load additional modules
  // Specifying 'querystring' loads the module that parses and formates URL query strings like the inputted text here
  // Feels like cheating...
  let obj2 = require('querystring');
  // Automatically parses the given querystring into key:value pairs inside an object
  // AKA querystring.parse()
  let json = obj2.parse(text)
  return json;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"