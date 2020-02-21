const multiplicationTable = function(maxValue) {
  let table = "";
  // Init row in widest scope as a counter
  let row = 0;
  // Nested looping required
  // Outside loop is for keeping track of how many rows; row is incremeted to 1 on first run
  // Will loop until the number of rows equal to maxValue are printed
  for (let i = 1; i <= maxValue; i++) {
    row++;
    // Inner loop prints out the values of each row
    // The initial value is whatever row we are on
    // As long as j <= row * maxValue, continue
    // j then gets incremented by whatever row we are on
    // This keeps track of the max value for each row, which would be row * maxValue (row 3 * maxValue 5 = 15)
    // j is added to table and the inner loop repeats
    // j will be 9, then 12, then 15 => then the loop will stop
    for (let j = row; j <= row * maxValue; j += row) {
      table += j + " "
    }
    table += "\n"
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

