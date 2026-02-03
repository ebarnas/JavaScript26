function order(){
    let drinkPrice = 0;
    let sandwichPrice = 0;
    let dessertPrice = 0;

    /*
        Was losing my mind are trying to figure out how to connect my form checkbox to this script,
        searched online because the references didn't show anything. I found this
        https://www.w3schools.com/jsref/prop_checkbox_checked.asp
        then a lot of debugging to see if it would work.
    */
   
    if (document.getElementById("water").checked) drinkPrice += 3;
    if (document.getElementById("coke").checked) drinkPrice += 3;
    if (document.getElementById("pepsi").checked) drinkPrice += 3;
    if (document.getElementById("beer").checked) drinkPrice += 3;
    if (document.getElementById("wine").checked) drinkPrice += 3;

    if (document.getElementById("grilled").checked) sandwichPrice += 8;
    if (document.getElementById("philly").checked) sandwichPrice += 8;
    if (document.getElementById("meatball").checked) sandwichPrice += 8;
    if (document.getElementById("club").checked) sandwichPrice += 8;
    if (document.getElementById("roast").checked) sandwichPrice += 8;

    if (document.getElementById("cheesecake").checked) dessertPrice += 5;
    if (document.getElementById("banana").checked) dessertPrice += 5;
    if (document.getElementById("fudge").checked) dessertPrice += 5;
    if (document.getElementById("pudding").checked) dessertPrice += 5;
    if (document.getElementById("donut").checked) dessertPrice += 5;

    let name = document.getElementById("name").value;
    let total = (drinkPrice + sandwichPrice + dessertPrice).toFixed(2);

    document.getElementById("summary").innerHTML = "<h3>Order Summary</h3>" + "<p>Customer: " + name + "</p>" + "<p>Drink Total: $" + drinkPrice.toFixed(2) + "</p>" + "<p>Sandwich Total: $" + sandwichPrice.toFixed(2) + "</p>" + "<p>Dessert Total: $" + dessertPrice.toFixed(2) + "</p>" + "<br>" + "<p>Order Total: $" + total + "</p>";
}