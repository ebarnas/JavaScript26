function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    document.getElementById("round").innerHTML = Math.round(9.7);
    document.getElementById("ceil").innerHTML = Math.ceil(4.2);
    document.getElementById("floor").innerHTML = Math.floor(2.1);
    document.getElementById("trunc").innerHTML = Math.trunc(10.8);
    document.getElementById("sign").innerHTML = Math.sign(-2);
    document.getElementById("pow").innerHTML = Math.pow(10, 5);
    document.getElementById("min").innerHTML = Math.min(5, 10, 25, 15, 60);
    document.getElementById("random").innerHTML = Math.random();


    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML = Math.floor(Math.random() * 100);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    document.getElementById("comparisons").innerHTML = "If you are using '==' it will only equal to the number."
    + "<br>"
    + "For example, if you have x == 5, it will purely focus on that 5. And if you compare it to like x == 6, this will be false."
    + "<br>"
    + "But if you compare it to x == '5', this will still be correct, because the numbers would be the same."
    + "<br>"
    + "But if you try comparing with '===' both values need to be EXACTLY the same."
    + "<br>"
    + "For example if you have x === '5' as the starting comparison, then you try to compare it with x === 5."
    + "<br>"
    + "It will return as false because x === 5, does not have the '' around the 5.";


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}