const numberOfVowels = function (data) {
  // Initialize number of vowels to 0 in widest scope
  let total = 0;
  // Use spread operator (...) to change the string into an array of characters, as you can then use forEach to iterate through it
  // Using arrow notation (char => { if {} })
  // Same as saying .forEach(function(char) { if{} })
  [...data].forEach(char => {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      // Accumulate total number of vowels
      total += 1;
    }
  })
  return total
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

