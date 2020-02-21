let camelCase = function(input) {
  // Since you don't want to change the first word in a string, separate it
  let firstWord = input.split(' ').shift();
  // Create a var that is the remaining string using regular expression
  // Breaking it down:
  // The space between / ( means we are looking for an empty space where the string will split into an array
  // The () is called a "capturing paranthesis", meaning that matched results are returned in the array (ie. the remaining string)
  // the . means finding a single character, and the + means matching any string that contains at least one of the given value (n+), n in this case being .
  // Thus (.+) means capturing the rest of the string that contains any single character (ie. everything after the first space in the string!!)
  // It returns an array of two strings - arr[0] being whatever is before (and including) the first space, and arr[1] being everything after
  // Therefore [1] at the end will return everything after the first space!
  let remainingWord = input.split(/ (.+)/)[1];
  // If the given input string includes a space, run the following code, otherwise just return the firstWord (no camelCase will happen)
  if (input.includes(" ")) {
    return firstWord + remainingWord
    // Split and create an array between each space
    .split(' ')
    // Create new array using map, by finding the charAt(0), meaning the first letter of each new string in the array
    // Change it toUpperCase
    // This alone will return eg. "thisI,A,S" as it is only mapping the first letter of each word
    .map(word => word.charAt(0).toUpperCase() 
    // Must string.slice() the first letter of each word that has been capitalized and join it with the capitalized word created above (eg. S + tring)
    // Finally, array.join() the words together by adding each word in the array together with no space in between ("")
    + word.slice(1)).join("")
  } else {
    return firstWord;
  }
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
