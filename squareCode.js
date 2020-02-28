const squareCode = function(message) {
  let finalCode = "";
  let messageNoSpace = message.replace(/ /g, "");
  let messageLength = messageNoSpace.length;
  // Number of characters on each line
  messageSquared = Math.ceil(Math.sqrt(messageLength));
  for (let i = 0; i < messageSquared; i ++) {
    // Only add a space between words after the first iteration
    if (i !== 0) {
      finalCode += " ";
    }
    // Must set variable j outside while loop, in order to start at the next position on the next iteration
    // First iteration starts charAt(0) in the while loop, then charAt(1) in the next and so on until i is equal to messageSquared 
    let j = 0 + i;
    while (j < messageLength) {
      finalCode += messageNoSpace.charAt(j);
      // Increment j by how many characters should be in each coded word; also the same amount of characters to skip to retrieve the next character in the coded sequence
      j+=messageSquared;
    }

  }
  return finalCode;
};

console.log(squareCode("chill out")); //messageSquared = 3
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
