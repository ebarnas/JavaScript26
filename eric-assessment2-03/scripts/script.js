let secretNumber = Math.floor(Math.random() * 1000);

function guess(){
    let guess = document.getElementById("guess").value;
    guess = Number(userGuess);

    let checkingNumber = Math.abs(userGuess - secretNumber);

    if (guess === secretNumber) {
        document.getElementById("results").innerHTML = "You have guessed it!";
    }
    else if (checkingNumber <= 10) {
        document.getElementById("results").innerHTML = "Very Hot!";
    }
    else if (checkingNumber <= 50) {
        document.getElementById("results").innerHTML = "Warm!";
    }
    else if (checkingNumber <= 100){
        document.getElementById("results").innerHTML = "Cold!";
    }
    else{
        document.getElementById("results").innerHTML = "Very Cold!";
    }
}