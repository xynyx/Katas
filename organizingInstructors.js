const organizeInstructors = function (instructors) {
  // Struggling with finding a way to initialize the array in the key as it appears; can't find good solution
  // Having to initialize it here and then delete it if it is empty later...can't push to array if it isn't initialized
  // "Cannot read property 'push' of undefined..."
  let instructorsObject = {
    iOS: [],
    Web: [],
    Blockchain: []
  };
  
  instructors.forEach(function (item) {
    if (item.course === "iOS") {
      // Tried to add instructorsObject.iOS += [] here to init array but then throws error "instructorsObject.iOS.push is not a function" despite that line of code working when initilized up top
      instructorsObject.iOS.push(item.name);
    } else if (item.course === "Web") {
      instructorsObject.Web.push(item.name)
    } else if (item.course === "Blockchain") {
      instructorsObject.Blockchain.push(item.name)
    }
  })

  for (let key in instructorsObject) {
    // Simply accessing instructorsObject[key] === [], does not work; must access the length itself, and if no elements found, then delete
    if (instructorsObject[key].length === 0) {
      delete instructorsObject[key];
    }
  }

  return instructorsObject;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));

// test
