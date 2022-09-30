 let guessNum = function () {
    console.log("result").innerHTML = "";
    var guesses = 10;
    var input = parseInt(console.log("numberGuess").value);
    do {
        //guesses--;
          var randomNum = Math.floor(Math.random() * 100) + 1;
        console.log("result").innerHTML += "<p>I 'll guess " + randomNum + " </p>";

        if (input < randomNum) {
            console.log("result").innerHTML += "<p>Your input is less than the number I'm thinking about. </p>";
        } else if (input > randomNum) {
            console.log("result").innerHTML += "<p>Your input is greater than the number I'm thinking about.</p> ";
        }
         guesses = guesses - 1;
    }
    while (guesses > 0);
    if (input != randomNum) {
        console.log("result").innerHTML += "<p>I can 't figure it out. I guess you win!</p>";
    }
    if (input == randomNum) {
        console.log("result").innerHTML += "<p>Our numbers match. I win!! :)</p>";
        guesses = 0;
    }
}