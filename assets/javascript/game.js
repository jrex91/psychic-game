var userGuessArr = [];
var userWins = 0;
var compWins = 0;
var computerGuess = randomGuess();
var guessesLeft = 8;



function randomGuess() {
    var possible = "abcdefghijklmnopqrstuvwxyz";

    return possible[Math.floor(Math.random() * possible.length)];
}
//console.log(computerGuess);//

document.onkeydown = function (event) {
    console.log(event.key)
    var userguess = event.key
    console.log(computerGuess)
    userGuessArr.push(userguess)
    // console.log(userGuessArr)
    if (userguess === computerGuess) {
        computerGuess = randomGuess()
        console.log("correct")
        correct()
        guessesLeft === 8
        console.log(userGuessArr)
        console.log(userWins)
        document.querySelector("#wins").innerHTML = userWins
        document.querySelector("#userGuesses").innerHTML = userGuessArr.join(",")
        document.querySelector("#guessLeft").innerHTML = guessesLeft

    } else if (guessesLeft < 1) {
        Loses()
        document.querySelector("#loses").innerHTML = compWins
        guessesLeft === 8
        document.querySelector("#guessLeft").innerHTML = guessesLeft
    } else {
        console.log("incorrect")
        console.log(userGuessArr)
        document.querySelector("#userGuesses").innerHTML = userGuessArr.join(",")
        guessesLeft--
        console.log(guessesLeft)
        console.log(compWins)
        document.querySelector("#guessLeft").innerHTML = guessesLeft

    }
}

function correct() {
    userGuessArr = []
    userWins++
    guessesLeft = 9
}

function Loses() {
    userGuessArr = []; //return the array back to empty//
    compWins++ // track a computer win//
    guessesLeft = 9 // return the guess counter back to 9//
    randomGuess()
}

function reWriteStats() {
    console.log("Wins: " + userWins)
    console.log("Loses: " + compWins)
    console.log("Your Guesses so far" + userGuessArr)

}

console.log(reWriteStats())