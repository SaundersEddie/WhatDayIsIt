// EXS 12th Oct 2020 
// Show our year calendar
// As we're not worried about year, just date and month this should be 
// fairly simple to implement using the date functionality

const leapYear = (year) => { return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0) };

let myMonths = [['January',31],['February',0],['March',31],['April',30],['May',31],['June',30],['July',31],['August',31],['September',30],['October',31],['November',30],['December',31]]
let myYear = leapYear(new Date().getFullYear());
let myMonthNumber = new Date().getMonth()
let monthToDisplay = new Date().getMonth();

leapYear(new Date().getFullYear()) ? myMonths[1] = ['February',29] :  myMonths[1] = ['February',28];

const displayOneMonth = (monthNumber) => {
   let myTableStart = "<table class='center'><tr>"
   let myTableEnd = "</tr></table>" 
   let myMonthTable = "";
   let myDayNumber = 0;
   for (let i=0; i < myMonths[monthNumber][1]; i++) {
      let myCellID = myMonths[monthNumber][0].slice(0,3) + (i+1);
      myMonthTable += `<td> <button class='buttonCustom' id='${myCellID}'> ${i+1} </button> </td>`;
      if (myDayNumber < 6 ) {
         myDayNumber++;
      } else {
         myMonthTable += "</tr><tr>";
         myDayNumber = 0;
      }
   }
   let myTable = myTableStart + myMonthTable + myTableEnd;
   $('#myCalendarHere').empty();
   $('#myCalendarHere').append(myTable)
}

const monthTable = (monthNumber) => {
   $('#monthName').text(`${myMonths[monthNumber][0]}`)
   displayOneMonth(monthNumber);
}

monthTable (myMonthNumber);

$(document).on('click','button', function() {
   var id = $(this).attr('id')
   switch (id) {
      case "lastMonth":
         monthToDisplay <= 0 ? monthToDisplay=11: monthToDisplay--;
         monthTable(monthToDisplay);
         break;
      case "nextMonth":
         monthToDisplay >= 11 ? monthToDisplay = 0 : monthToDisplay++;
         monthTable(monthToDisplay);
         break;
      default:
         // This is where our call to the database will take place
         console.log ("Not implemented");
  }
   return false; 
}); 
