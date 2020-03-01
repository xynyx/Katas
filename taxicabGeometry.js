const blocksAway = function(directions) {
  // Start at [0,0]
  let initial = [0, 0];
  let movement;
  directions.forEach(function(direction, index) {
    // As depending on how many times the cab goes in one direction, its facing direction gets changed
    // Checking to see how many times it has gone in the same direction allows you to reorient which direction it is facing (ie. if it has gone right 3 times, technically left is now right, and right is now left!)
    if (direction === "right") {
      if (directions[index-2] === "right") {
        if (directions[index-4] === "right") {
          movement = directions[index+1];
          initial[0] -= movement;
         } else {
          movement = directions[index+1];
          initial[1] -= movement;
         }
      } else {
        movement = directions[index+1]
        initial[0] += movement;
      }
    }
    if (direction === "left") {
      if (directions[index-2] === "left") {
        if (directions[index-4] === "left") {
          movement = directions[index+1];
          initial[1] -= movement;
          } else {
          movement = directions[index+1];
          initial[0] -= movement;
         }
      } else {
        movement = directions[index+1];
        initial[1] += movement;
     }
    }
  })
  return directionObj = {east: initial[0], north: initial[1]}
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));