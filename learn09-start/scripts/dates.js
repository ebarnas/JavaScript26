/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const object = new Date(2026, 2, 21, 5, 30, 59);
document.getElementById("basic").innerHTML = object;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const today = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let year = today.getFullYear();
let month = months[today.getMonth()];
let day = days[today.getDay()];
let todaydate = "Year: " + year + " Month: " + month + " Day: " + day;
document.getElementById("today").innerHTML = todaydate;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const birthday = new Date("November 22, 2003");
document.getElementById("birthday").innerHTML = birthday;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
const iso = new Date("2003-11");
document.getElementById("iso").innerHTML = iso;


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
let millisec = Date.parse("February 21, 2026");
const date1 = new Date(millisec);
const date2 = new Date("02/21/2026");
const date3 = new Date("21 February 2026");
document.getElementById("date1").innerHTML = date1;
document.getElementById("date2").innerHTML = date2;
document.getElementById("date3").innerHTML = date3;
//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
const get1 = new Date();
const get2 = new Date();
const get3 = new Date();
const get4 = new Date();

document.getElementById("get1").innerHTML = get1.getHours();
document.getElementById("get2").innerHTML = get2.getDate();
document.getElementById("get3").innerHTML = get3.getSeconds();
document.getElementById("get4").innerHTML = get4.getMilliseconds();

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
const set1 = new Date("November 22, 2026");
set1.setFullYear(2003);
const set2 = new Date("February 21, 2026");
set2.setDate(set2.getDate() + 30);
const set3 = new Date("February 21, 2026");
set3.setHours(16, 50, 46);
const set4 = new Date("February 21, 2026");
set4.setTime(870);

document.getElementById("set1").innerHTML = set1;
document.getElementById("set2").innerHTML = set2;
document.getElementById("set3").innerHTML = set3;
document.getElementById("set4").innerHTML = set4;