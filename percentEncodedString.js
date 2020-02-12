const urlEncode = function (text) {
  let encodedText = text.trim()
  for (let i = 0; i < encodedText.length; i++) {
    // Split turns string into array of strings by separting at each instance of the specified separator (in this case a white space)
    // Join creates a new string by concatenating all the elements separated by a specified (in this case "%20" separator)
      return encodedText.split(" ").join("%20")
    }
  return text;
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode(" blue is greener than purple for sure"));
console.log(urlEncode("blue is greener than purple for sure "));


// THIS IS A MUCH BETTER SOLUTION (however it doesn't fulfil requirements of Kata because no loop is used)

/* const urlEncode = function (text) {
  return text.trim().replace(/ +/g, '%20')
}; */

  // trim() removes whitespace from beginning and end of string
  // replace() will iterate through the string, find the first argument, and replace it with the second
  // RegExp object is used to match text with a pattern; using /  / to enclose 
  // the "g" is a RegExp modifier, which means it finds ALL matches rather than stopping after the first match ("gi" would be a case-insensitive global search)
  // Other option for RegEx object: / +/g, where the + means that multiple spaces between words will only be replaced by one instance of the 2nd argument
  // Can also explicitly find a "whitespace character" using \s, creating /\s+/g

// Using encodeURIComponent would also work
