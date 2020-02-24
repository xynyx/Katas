let talkingCalendar = function (date) {
  // Split date into easily accessible array of length 3
  let dateArray = date.split("/");
  let month = convertMonth(dateArray[1]);
  let day = convertDay(dateArray[2]);
  let year = dateArray[0];
  return month + " " + day + ", " + year;

};

// Originally had else if statements here, but it quickly became crowded and repetitive; switch felt like a better solution
// no "break" required as return stops the switch anyway
function convertMonth(month) {
  switch (month) {
    case "01": return "January";
    case "02": return "February";
    case "03": return "March";
    case "05": return "April";
    case "06": return "June";
    case "07": return "July";
    case "08": return "August";
    case "09": return "September";
    case "10": return "October";
    case "12": return "December";
    case "11": return "November";
  }
}

function convertDay(day) {
  switch (day) {
    // parseInt() required to return the day value without the leading 0's
    // This is because parseInt() returns value ignoring all leading whitespace
    // parseInt(string [, radix]) => parses string and return integer of the specified radix(the base in math systems)
    case "01": case "31": return parseInt(day) + "st";
    case "02": case "22": return parseInt(day) + "nd";
    case "03": return parseInt(day) + "rd";
    default: return parseInt(day) + "th";
    
  }
}

// This is the same as above, but switches felt cleaner in this case
/* function convertDay(day) {
  if (day == 1 || day == 31) {
    return parseInt(day) + "st";
  } else if (day == 2 || day == 22) {
    return parseInt(day) + "nd";
  } else if (day == 3) {
    return parseInt(day) + "rd";
  } else {
    return parseInt(day) + "th";
  }
} */

console.log(talkingCalendar("2017/12/01"));
console.log(talkingCalendar("2007/02/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/01/03"));
