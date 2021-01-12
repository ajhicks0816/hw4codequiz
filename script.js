//Variables
var highscoresEl = document.createElement("highscores");
var countdownClockEl = document.createElement("timer");
var htmlEl = document.createElement("div")
var questionsEl = document.createElement("ol")
var li1 = document.createElement('li');
var li2 = document.createElement("li2");
var li3 = document.createElement("li3");
var li4 = document.createElement("li4");

Highscores.textContent = "View Highscores";
countdownClock.textContent = "Timer:";
htmlEl.textContent = "What is HTML known as?"
li1.textContent = "The Appearance";
li2.textContent = "The Brain";
li3.textContent = "The Body";
li4.textContent = "How.The.Mind.Lives";

//Timer
function countdown() {
    var timeLeft = 15;

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {

        console.log(timeLeft);
        if (timeLeft === 1) {
            timerEl.innerHTML = (timeLeft--) + " second left";
            console.log("IF == 1");
                }
        else if (timeLeft > 0) {
            timerEl.innerHTML = (timeLeft--) + " seconds left";
            console.log("IF > 0");
        }
        else {
            timerEl.innerHTML = "";
            clearInterval(timeInterval);
            console.log("IF ELSE");
            displayMessage();
        }



    }, 1000);
}


function displayTimer() {
    console.log("Hello")
}