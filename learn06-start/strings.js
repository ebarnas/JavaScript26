function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Eric Barnas";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home.";
    document.getElementById("length").innerHTML = myString.length;

    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let myEscape = "We are the so-called \"Vikings\" from the north. We have come to kill \\ raid! We need help! It\'s Vikings!";
    document.getElementById("escape").innerHTML = myEscape;

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    let name = "Eric Adam Barnas";
    let firstpart = name.slice(0, 4);
    document.getElementById("first").innerHTML = firstpart;
    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let secondpart = name.slice(5, 9);
    document.getElementById("middle").innerHTML = secondpart;
    // Use the JavaScript subst Method to display your last name to the last paragraph
    let thirdpart = name.slice(10, 16);
    document.getElementById("last").innerHTML = thirdpart;


    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College"
    let newMajor = major.replace("Physical Therapy", "AAS in Software Application Design and Development")
    document.getElementById("major").innerHTML = newMajor;

    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    let upperText = myText.toUpperCase();
    document.getElementById("upper").innerHTML = upperText;

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    let trimmedText = trimText.trim();
    document.getElementById("trim").innerHTML = trimmedText;
    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    let index = months.indexOf("May");
    document.getElementById("index").innerHTML = index;

    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let first = "Eric";
    let last = "Barnas";

    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
    let text = `Hello my name is ${first} ${last}! Nice to meet you!`;
    document.getElementById("greeting").innerHTML = text;
}