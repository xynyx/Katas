let repeatNumbers = function(data) {
  let result =  "";
  // Loop through each array in the data array
  for (i = 0; i < data.length; i++) {
    // Since there needs to be a comma and space between each inner array printout (EXCEPT the first one), add ", " between the iteration of each inner array
    if (i != 0) {
      result += ", "
    }
    // Set j to the 1st index of each inner array (number of times to repeat), and access index 0 of each inner array (number to repeat) and repeat until iterated over a number of times equal to 1st index in inner array
    for (j = data[i][1]; j > 0; j--) {
      result += data[i][0];
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
