// MyScript

console.log ("Script has loaded")

const nextYear = new Date().getFullYear() + 1;
const myCalender = new CalendarPicker('#myCalendarWrapper', {
   // If max < min or min > max then the only available day will be today.
   min: new Date(),
   max: new Date(nextYear, 10) // NOTE: new Date(nextYear, 10) is "Sun Nov 01 nextYear"
});
 
// const currentDateElement = document.getElementById('current-date');
// currentDateElement.textContent = myCalender.value;
 
// const currentDayElement = document.getElementById('current-day');
// currentDayElement.textContent = myCalender.value.getDay();
 
// const currentToDateString = document.getElementById('current-datestring');
// currentToDateString.textContent = myCalender.value.toDateString();
 
// myCalender.onValueChange((currentValue) => {
//    currentDateElement.textContent = currentValue;
//    currentDayElement.textContent = currentValue.getDay();
//    currentToDateString.textContent = currentValue.toDateString();
//    console.log(`The current value of the calendar is: ${currentValue}`);
// })

// EXS 12th Oct 2020 
// Show our year calendar
// As we're not worried about year, just date and month this should be 
// fairly simple to implement using the date functionality
const leapYear = (year) => {
   // This will return true if a leap year
   return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

// First we need to find out if the year is a leap year
let myYear = leapYear(new Date().getFullYear());
console.log ("Is it a leapyear? ",myYear)
//let myLeapYear = leapYear(myYear);
//console.log ("myLeapYear: ", myLeapYear)

// console.log (myDate.getFullYear())
// let month = ['January', ]

