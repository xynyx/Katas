function merge(array1, array2) {
  // Concat() combines arrays, but does not sort
  let newArray = array1.concat(array2);
  // arr.sort([compareFunction])
  // Sort() sorts elements (converted to strings), comparing their UTF-16 code units value 
  // In order to sort numerical values, you must specify a compareFunction parameter with sort
  // To sort numbers in ascending order, sort each element by subtracting one from the other (a - b)
  // If a > b, eg. 4 > 2, swap positions
  // If a < b, eg. 2 < 4, keep the position
  // If a = b, return 0 (do nothing)
  return newArray.sort((a, b) => a - b);
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
console.log(merge([ 4, 12, 24, -2, 18], [ 43, 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);

