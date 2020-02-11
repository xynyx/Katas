const conditionalSum = function (values, condition) {
  // Init total in largest scope
  let total = 0;
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      // Check if number is even, if so...
      if (values[i] % 2 === 0) {
        // Add number to total
        total += values[i]
      }
    }
    return total;
  }
  else if (condition === "odd") {
    for (let i = 0; i < values.length; i++) {
      // Check if number is odd, if so...
      if (values[i] % 2 !== 0) {
        // Add number to total
        total += values[i]
      }
    }
    return total;
  } else {
    // If no number given, return 0
    return 0;
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));