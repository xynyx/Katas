/* let sumLargestNumbers = function (data) {
  // If array only has 2 values, automatically add them and return
  if (data.length === 2) {
    return data[0] + data[1]
  } else {
    // Run max function and save to variable
    let max1arr = max(data);
    // Get index 0 of returned function (being the max value) and save to variable
    let max1 = max1arr[0];

    // Remove the index 1 of returned function (being the index of that value)
    data.splice(max1arr[1], 1);
    // Now you are left with the data array that does NOT have the greatest number anymore

    // Repeat same function on 2nd max value
    let max2arr = max(data);
    let max2 = max2arr[0];

    return max1 + max2;
  }
}


function max(arr) {
  // Initialize max at first given array value, maxIndex at 0 (also first value), and empty array
  let max = arr[0];
  let maxIndex = 0;
  let maxArray = [];
  // Iterate through array, starting at index of 1 (as index of 0 is already the baseline)
  for (let i = 1; i < arr.length; i++) {
    // If index 1 of array is greater than index 0 of array... (then index 2 > 1? etc)
    if (arr[i] > max) {
      // make max the new value at that index
      max = arr[i];
      // save the value of the index in order to splice it and rerun this function to find the 2nd highest number
      maxIndex = i;
      // since you can't explicitly return 2 values from a function, create an array with both the max value and the maxIndex value
      maxArray = [max, maxIndex]
    }
  } return maxArray;
} */

let sumLargestNumbers = function (data) {
  let addTwoMaxValues = data
    // sort function compares one value next to the other, and switches their index depending on the value
    // This here will compare and switch values so that they are in ascending order
    // eg. Array of 3,2,1  ==> 3 - 2 = 1, which means a > b, so they must switch positions
    // Now looks like 2,3,1
    .sort((a, b) => a - b)
    // Takes out the last 2 values of the new array (being the two highest values!)
    .slice(-2)
    // Reduce executes reducer function (that you provide) on each element of the array (being the 2 highest remaining values)
    // Different syntax compared to sort, but does same thing; however arrow function is simpler and easier to read
    // arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
    // a = accumulator, b = currentValue
    // accumulator being the last callback return value
    .reduce(function (a, b) { return a + b; });
  return addTwoMaxValues;
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));