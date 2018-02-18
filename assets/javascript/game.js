var win = 0;
var losses = 0;
var guesses = 9;
var sofar = [];
var index = 0;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var computerChoice = letters[Math.floor(Math.random() * letters.length)];

document.onkeypress = function (event) {
    var player = event.key;
    sofar[index] = player;
    index++;
    if (player === computerChoice) {
        win++;
        guesses = 9;
        sofar = [];
        index = 0;
        computerChoice = letters[Math.floor(Math.random() * letters.length)];
    }
    else if (guesses === 0) {
            losses++;
            guesses = 9;
            sofar = [];
            computerChoice = letters[Math.floor(Math.random() * letters.length)]; 
            index=0;
        }
    else {
        guesses--;
    }

    document.getElementById("win").innerHTML = "Wins: " + win;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guesses").innerHTML = "guesses: " + guesses;
    document.getElementById("sofar").innerHTML = "guess so far: " + sofar;
}
