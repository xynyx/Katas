
const fns = {
  upper: str => str.toUpperCase(),
  snake: str => str.replace(/ /g, '_'),
};
const makeCase = function(input, cases) {
  if (typeof cases === 'string') {
    cases = [cases]
    return cases.reduce((lastStr, transform) => fns[transform](lastStr), input);
  } else {
    return cases.reduce((lastStr, transform) => fns[transform](lastStr), input);
  }
}
 
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", "snake"));

// cases = [cases];

// if (cases.length === 1) {
//   return cases.reduce((lastStr, transform) => fns[transform](lastStr), input);
// } 