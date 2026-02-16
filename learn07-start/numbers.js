function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Eric"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let five = 5;
    let ten = "10"; 
    document.getElementById("add").innerHTML = five + ten;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let string = 510;
    document.getElementById("to-string").innerHTML = string.toString();

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let expon = 1.5634;
    document.getElementById("exponent").innerHTML = expon.toExponential() + "<br>" + expon.toExponential(2);

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    let fixer = 5.947;
    document.getElementById("fixed").innerHTML = fixer.toFixed() + "<br>" + fixer.toFixed(2);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let precise = 2.856;
    document.getElementById("precision").innerHTML = precise.toPrecision() + "<br>" + precise.toPrecision(2);

    // Demonstrate the use of parseFloat() and print to the float paragraph
    let floater = "10";
    document.getElementById("float").innerHTML = parseFloat(floater) + "<br>" + parseFloat("5");

    // Demonstrate the use of parseInt() and print to the int paragraph
    let inter = "10";
    document.getElementById("int").innerHTML = parseInt(inter) + "<br>" + parseInt("-5");


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    let equals = "The way you use them is how you can tell they are different." 
        + "<br>" 
        + "Like if you are using the triple equals, ===, that means that both variables or things are exactly the same." 
        + "<br>" 
        + "For example, one === one would be true because both are exactly 'one'."
        + "<br>"
        + "Though if you did one == one, this would still be true, but if you changed one of the 'ones' to a '1' this would still be true."
        + "<br>"
        + "Because they are the same even if you are saying different ways of one or '1', the == will recognize they are in that same family."
        + "<br>"
        + "It would not be true if you did this one === '1'. Because they are not exactly the same.";
    document.getElementById("equals").innerHTML = equals;
    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    let logic = "If you are using the 'and' operator, which is &&, everything that you are asking with it must be true."
        + "<br>"
        + "Like, you have two variables and both are set to a certain thing. And you want to check if they are correct."
        + "<br>"
        + "You can use && to check them both in one statement, though if one of the variables doesn't match with their correct input, the statement will come back false."
        + "<br>"
        + "To go around that, you can use '||', which is the 'or' operator, though you will have to be careful as if there is one false input, it can still say the statement is true."
        + "<br>"
        + "In the order of operator precedence, the 'and' operator are always evaluated down before the 'or' operator."
        + "<br>"
        + "You can put the 'or' operators in ()'s in order to bypass that order precedence.";
    document.getElementById("logic").innerHTML = logic;


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    let answer = window.prompt("Do you like video games?");
    let response = "";

    switch(answer){
        case "Yes":
            response = "Thank god!";
            break;
        case "No":
            response = "Why not?";
            break;
        default:
            response = "You have failed.";
            break;
    }
    // I messed around with the switch, I didn't want the responses to be printed out to console.log
    document.getElementById("switch").innerHTML = response;

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    let animal = "dog";
    let person = (animal === "cat") ? ("You are a cat person.") : ("You are a dog person.");
    document.getElementById("ternary").innerHTML = person;
}