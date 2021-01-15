//question click function
//3rd part stop timer, showing end screen, show final score, end screen (picture). create 2 variables

// < !--- Questions & Buttons-- >
var questions = [
    {
        title: "Commonly used date types DO NOT include:",
        choices: ["string", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "Arrays in JavaScript can be used to store _______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ________ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title: "Who invented JavaScript?",
        choices: ["James Gosling", "Brendan Eich", "John Resig", "Winifred Mitchell Baker"],
        answer: "Brendan Eich"
    },
    {
        title: "The condition in a if/else statement is enclosed within ________.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    }

]

var time = questions.length * 10;
var timerId;

//Variables
var questionsEl = document.createElement("questions");
var questionsTitle = document.getElementById("question-title");
var timerEl = document.createElement("time");
var choices = document.createElement("choices")
var submitEl = document.createElement("submit")
var startBtn = document.createElement("start");
var intialsEl = document.createElement("initials")


// Start Quiz
var startScreenEL = document.getElementById("start-screen");
startScreenEL.setAttribute("class", "hide")
startScreenEL.addEventListener("click", function () {
    console.log("clicked on the button")

    // console.log(questions[0].title)
    // questionsTitle.textContent = questions[0].title

    questionsEl.removeAttribute("class");

    timerId = setInterval(tickTock, 1000);

    timerEl.textContent = time;

    getQuestions();
}

function getQuestion() {

    }


);

//Timer
function countdown() {
    var timeLeft = 15;

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        console.log(timeLeft);
        count--;
        if (count === 0) {
            stopIntervel()
        }
    }, 1000);

    var stopInterval = function() {
        console.log("time is up!");
        clearInterval(timer);
    }

    // if (timeLeft === 1) {
    // timerEl.innerHTML = (timeLeft--) + " second left";
    // console.log("IF == 1");
    // }
    // else if (timeLeft > 0) {
    // timerEl.innerHTML = (timeLeft--) + " seconds left";
    // console.log("IF > 0");
    // }
    // else {
    // timerEl.innerHTML = "";
    // clearInterval(timeInterval);
    // console.log("IF ELSE");
    // displayMessage();
}
    // });




function displayTimer() {
    console.log("Hello")
}

    // Click events
};
