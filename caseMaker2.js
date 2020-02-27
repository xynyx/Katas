const makeCase = function (input, cases) {
  let finalCase = input;
  // Had to start i at -1, because those cases that are just a string do not get processed if I start at 0...
  // If I make cases = [cases], then the examples with 2 cases do not get processed
  for (let i = -1; i < cases.length; i++) {
    // UPDATE: In order to process priority cases, separate the for loops so that it iterates over all the cases looking for the priority cases first
    switch (cases[i] || cases) {
      case "pascal":
        finalCase = pascalCase(finalCase);
        break;
      case "camel":
        finalCase = camelCase(finalCase);
        break;
      case "snake":
        finalCase = snakeCase(finalCase);
        break;
      case "kebab":
        finalCase = kebabCase(finalCase);
        break;
      case "title":
        finalCase = titleCase(finalCase);
        break;
    }
  }
  // Second for loop that processes the second priority cases
  for (let i = -1; i < cases.length; i++) {
    switch (cases[i] || cases) {
      case "vowel":
        finalCase = vowelCase(finalCase);
        break;
      case "consonant":
        finalCase = consonantCase(finalCase);
        break;
    }
  }
  // Third for loop that processes the last priority cases
  for (let i = -1; i < cases.length; i++) {
    switch (cases[i] || cases) {
      case "upper":
        finalCase = upperCase(finalCase);
        break;
      case "lower":
        finalCase = lowerCase(finalCase);
        break;
    }
  }
  return finalCase;
}


const pascalCase = function (input) {
  let firstWord = input.split(' ').shift();
  let remainingWord = input.split(' ');
  // If the given input string includes a space, run the following code, otherwise just return the firstWord (no camelCase will happen)
  if (input.includes(" ")) {
    return remainingWord
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

const camelCase = function (input) {
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

const snakeCase = function (input) {
  return input.replace(/ /g, "_");
}

const kebabCase = function (input) {
  return input.replace(/ /g, "-");
}

const titleCase = function (input) {
  return input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

const vowelCase = function (input) {
  // Replace() returns new string matching the pattern [aeiou] after performing the given function on it (which changes the matching letter to uppercase, leaving the rest of the string)
  // Again, the g means that this is performed across the entire string (and not just the first instance)
  return input.replace(/[aeiou]/g, function (upper) {
    return upper.toUpperCase();
  })
}


const consonantCase = function (input) {
  // Replace() returns new string matching the pattern [aeiou] after performing the given function on it (which changes the matching letter to uppercase, leaving the rest of the string)
  // Again, the g means that this is performed across the entire string (and not just the first instance)
  return input.replace(/[bcdfghjklmnpqrstvxz]/g, function (upper) {
    return upper.toUpperCase();
  })
}

const upperCase = function (input) {
  return input.toUpperCase();
}

const lowerCase = function (input) {
  return input.toLowerCase();
}


// ANOTHER WAY involving creating a fns object with all the cases and then using reduce to process through the object and cases 

// Cleaner and more concise, however I couldn't quite figure out how to set the given priority sequence using this method

/* const fns = {
  pascal: function (input) {
    let firstWord = input.split(' ').shift();
    let remainingWord = input.split(' ');
    // If the given input string includes a space, run the following code, otherwise just return the firstWord (no camelCase will happen)
    if (input.includes(" ")) {
      return remainingWord
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
  },
  camel: function (input) {
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
  },
  snake: function (input) {
    return input.replace(/ /g, "_");
  },
  kebab: function (input) {
    return input.replace(/ /g, "-");
  },
  title: function (input) {
    return input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  },
  vowel: function (input) {
    // Replace() returns new string matching the pattern [aeiou] after performing the given function on it (which changes the matching letter to uppercase, leaving the rest of the string)
    // Again, the g means that this is performed across the entire string (and not just the first instance)
    return input.replace(/[aeiou]/g, function (upper) {
      return upper.toUpperCase();
    })
  },
  consonant: function (input) {
    // Replace() returns new string matching the pattern [aeiou] after performing the given function on it (which changes the matching letter to uppercase, leaving the rest of the string)
    // Again, the g means that this is performed across the entire string (and not just the first instance)
    return input.replace(/[bcdfghjklmnpqrstvxz]/g, function (upper) {
      return upper.toUpperCase();
    })
  },
  upper: function (input) {
    return input.toUpperCase();
  },
  lower: function (input) {
    return input.toLowerCase();
  }
}

const makeCase = function(input, cases) {
  if (typeof cases === 'string') {
    cases = [cases]
    return cases.reduce((lastStr, transform) => fns[transform](lastStr), input);
  } else {
    return cases.reduce((lastStr, transform) => fns[transform](lastStr), input);
  }
}
} */


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a STRING", "lower"));
console.log(makeCase("this is a string", ["upper", "snake"]));


// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING

/* Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower */


