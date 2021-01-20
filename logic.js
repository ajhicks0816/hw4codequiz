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
// var questionsEl = document.createElement("questions");
// var questionsTitle = document.getElementById("question-title");
// var timerEl = document.createElement("time");
// var choices = document.createElement("choices")
// var submitEl = document.createElement("submit")
// var intialsEl = document.createElement("initials")
var startBtn = document.getElementById("start");
var currentQuestionDiv = document.getElementById("current-question");
var choice1Btn = document.getElementById("choice-1");
var choice2Btn = document.getElementById("choice-2");
var choice3Btn = document.getElementById("choice-3");
var choice4Btn = document.getElementById("choice-4");
var currentQuestion = questions[0];
// {
//     title: "Commonly used date types DO NOT include:",
//     choices: ["string", "booleans", "alerts", "numbers"],
//     answer: "alerts"
// }

// // Start Quiz
// var startScreenEL = document.getElementById("start-screen");
// startScreenEL.setAttribute("class", "hide")
startBtn.addEventListener("click", function () {
    // console.log("clicked on the button");
    // console.log(currentQuestion);
    var questionTitle = currentQuestion.title;
    currentQuestionDiv.textContent = questionTitle;
    
    var choices = currentQuestion.choices;
    var choice1 = choices[0];
    var choice2 = choices[1];
    var choice3 = choices[2];
    var choice4 = choices[3];
    console.log(choice1);

    choice1Btn.textContent = choice1;
    choice2Btn.textContent = choice2;
    choice3Btn.textContent = choice3;
    choice4Btn.textContent = choice4;
    // questionsEl.removeAttribute("class");

    // timerId = setInterval(tickTock, 1000);

    // timerEl.textContent = time;

    // getQuestions();
});


// //Timer
// function countdown() {
//     var timeLeft = 15;

//     // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function () {
//         console.log(timeLeft);
//         count--;
//         if (count === 0) {
//             stopIntervel()
//         }
//     }, 1000);

//     var stopInterval = function() {
//         console.log("time is up!");
//         clearInterval(timer);
//     }

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
//     // displayMessage();
// }
//     // });


// function displayTimer() {
//     console.log("Hello")
// }

    // Click events
