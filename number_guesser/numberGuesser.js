const random = Math.floor(Math.random() * 101);

const prompt = require('prompt-sync')();

console.log("Guess a number between 0 - 100: ");
answer = prompt("> ");

let tries = 0;
// !== does not work here... must be comparing a string to a number (Math produces a number while prompt produces a string)
while (answer != random) {
  if (isNaN(answer) === true) {
    console.log("Not a number! Try again.")
    // Cannot just declare "answer" here; must overwrite previous answer by explicitly prompting user again
    // If you do not overwrite the previous answer, the while loop will go on infinitely...
    answer = prompt("> ");
  } else if (answer > 100 || answer < 0) {
    console.log("Number must be between 0 and 100!");
    answer = prompt("> ");
  } else if (answer < random) {
    console.log("Too low!")
    tries++;
    answer = prompt("> ");
  } else if (answer > random) {
    console.log("Too high!");
    tries++;
    answer = prompt("> ");
  }
}

tries++;
console.log("You got it! You took " + tries + " attempts!");


