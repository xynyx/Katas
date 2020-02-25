let calculateChange = function (total, cash) {
  let remaining = cash - total;
  let finalChange = {
    // Math.floor returns largest integer <= the given number
    // Initially coded to check to see if remaining >= a specific amount using if statements and only running the code if true, but became messy and convoluted
    // This way, it goes through each option to determine whether change of that type can be issued, and subsequently using a modulo of the previous value to leave out the previous higher-tier value (ie. tenDollar => remaining % 2000, so that if there is a value that is bigger or equal than 2000 ($20), it won't be used in the calculation)
    twentyDollar: Math.floor(remaining / 2000),
    tenDollar: Math.floor(remaining % 2000 / 1000),
    fiveDollar: Math.floor(remaining % 1000 / 500),
    twoDollar: Math.floor(remaining % 500 / 200),
    oneDollar: Math.floor(remaining % 200 / 100),
    quarter: Math.floor(remaining % 100 / 25),
    dime: Math.floor(remaining % 25 / 10),
    // Had issues with the nickel being over-used; for example, remainder of 499 % 10 = 9, and 9 / 5 = 1 (Math.floor), however that calculation was incorrect
    // multiplying the calculation by anything less than half (eg. * 0.2 worked as well) returns the true amount of nickels    
    nickel: Math.floor((remaining % 10 / 5) * 0.5),
    // No division necessary because 5 is the second smallest value, and (remaining % 5) can only be issued with pennies
    penny: Math.floor(remaining % 5),
  }

  // Since the above code prints out the keys with a value of 0 as well, you must use a for...in loop to check to see which keys have a value of 0, and to delete them from the object
  for (let key in finalChange) {
    if (finalChange[key] === 0) {
      delete finalChange[key];
    }
  }
  return finalChange;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(505, 1000));
console.log(calculateChange(1000, 7001));
