// EXS 12th Oct 2020 
// Show our year calendar
// As we're not worried about year, just date and month this should be 
// fairly simple to implement using the date functionality

// const nodemon = require("nodemon");

// myMonthTable will be used to create the calendar to display. Each day
// will be a button


const leapYear = (year) => {
   // This will return true if a leap year
   return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

const displayOneMonth = (monthNumber) => {
   console.log ("Calling Display One Month");
   // Create our table for the current month to display
   console.log (myMonths[monthNumber][0])
   for (let i=0; i < myMonths[monthNumber][1]; i++) {
      console.log ("Testing: ",i+1);
   }
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

const monthTable = (monthNumber) => {
   $('#monthName').text(myMonths[monthNumber][0])
   displayOneMonth(monthNumber);

}


let myMonths = [['January',31],['February',0],['March',31],['April',30],['May',31],['June',30],['July',31],['August',31],['September',30],['October',31],['November',30],['December',31]]
let myYear = leapYear(new Date().getFullYear());
let myMonthTable = "";
let myTableStart = "<table class='center'><tr>"
let myTableEnd = "</tr></table>"
let table = ""
let myMonthNumber = new Date().getMonth()
// console.log (myTestMonth)
let currentMonth = "January";
let dayOfWeekCounter = 0
let monthToDisplay = new Date().getMonth();


monthTable (myMonthNumber);

leapYear(new Date().getFullYear()) ? myMonths[1] = ['February',29] :  myMonths[1] = ['February',28];
myMonths.forEach(displayMonth);

table = myTableStart+myMonthTable+myTableEnd;
$('#myCalendarHere').append(table)
// $('#monthName').text(myMonths[myMonthNumber])


$('button').click(function() { 
   var id = $(this).attr('id')
  switch (id) {
     case "lastMonth":
         // console.log ("Last Month Selected");
         monthToDisplay <= 0 ? monthToDisplay=11: monthToDisplay--;
         monthTable(monthToDisplay);
         break;
      case "nextMonth":
         // console.log ("Next Month Selected");
         // monthToDisplay++;
         monthToDisplay >= 11 ? monthToDisplay = 0 : monthToDisplay++;
         monthTable(monthToDisplay);
         break;
      default:
         console.log ("Not implemented");
  }

   return false; 
}); 
