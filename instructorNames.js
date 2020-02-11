const instructorWithLongestName = function(instructors) {
  // Working with keys inside objects inside an array...
  // Init longestName to the the length of the name in the first array (must access it by specifying the instructors array and the index of the object)
  let longestName = instructors[0].name.length;
  // Init longestArray (what we want to return at the end) to index 0 in the instructors array
  let longestArray = instructors[0];
  // arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
  // object is the current element (and as this is an array, it is the first object!)
  // Iterate through each object in array using forEach
  instructors.forEach(function(object, index) {
     // Access current element object .name.length and compare it to the initialized longestName (being the first object in array)
      if (object.name.length > longestName) { 
        // If the current object.name.length is greater than the longestName, replace it; if not, do not run this code and continue to the next object in array
        longestName = instructors[index].name.length;
        // As the goal is to return the object (and not just the name), you must also assign the index of the object with the current largest name
        longestArray = instructors[index];
      }
  })
  // Once all objects in array have been iterated over, return the final longestArray result
  return longestArray;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia"  , course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"},
  {name: "Domascux", course: "Web"}

]));
