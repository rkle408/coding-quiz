var startButton = document.querySelector(".start-button");
var goBackButton = document.querySelector(".go-back");
var clearButton = document.querySelector(".clear-scores");
var timerElement = document.querySelector(".timer");

var timer;
var timerCount;

// Will probablly need more variables as we go

// Need a start function for when we click the start button for the quiz and timers to start
function startQuiz() {
    timerCount = 80;
    startButton.disabled = true;
    startTimer();
}
