// EXS 12th Oct 2020 
// Show our year calendar
// As we're not worried about year, just date and month this should be 
// fairly simple to implement using the date functionality

// const nodemon = require("nodemon");

// myMonthTable will be used to create the calendar to display. Each day
// will be a button
let myMonthTable = "";
let myTableStart = "<table class='center'><tr>"
let myTableEnd = "</tr></table>"
let table = ""
let currentMonth = "January";
let dayOfWeekCounter =0

const leapYear = (year) => {
   // This will return true if a leap year
   return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

const displayMonth = (item) => {
   for (let i = 0; i < item[1]; i++) {
      let myID = item[0].slice(0,3) + (i+1)
      if (currentMonth !== item[0]) {
         myMonthTable += '</tr><tr>';
         currentMonth = item[0];
         dayOfWeekCounter = 0;
      }
      myMonthTable += `<td> <button class='buttonCustom' id='${myID}'> ${i+1} </button> </td>`;
      if (dayOfWeekCounter < 6 ) {
         dayOfWeekCounter++;
      } else {
         myMonthTable += "</tr><tr>";
         dayOfWeekCounter = 0;
      }
   }
}


let myMonths = [['January',31],['February',0],['March',31],['April',30],['May',31],['June',30],['July',31],['August',31],['September',30],['Octover',31],['November',30],['December',31]]
// First we need to find out if the year is a leap year
let myYear = leapYear(new Date().getFullYear());
leapYear(new Date().getFullYear()) ? myMonths[1] = ['February',29] :  myMonths[1] = ['February',28];
myMonths.forEach(displayMonth);

table = myTableStart+myMonthTable+myTableEnd;
$('#myCalendarHere').append(table)

$('button').click(function() { 
   var id = $(this).attr('id')
   return false; 
}); 
