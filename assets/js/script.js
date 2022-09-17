// Test connection to HTML:
// alert("hello")

// What I need:
// Timer
// High scores page -- possibly a new HTML file
// Introduction button to start quiz
// Questions and corresponding answers
// Need to be able to check if user answer matches the actual correct answer
// When user gets question wrong, then it needs to subtract 10 seconds
// When timer ends, then quiz ends
// When quiz ends, results need to appear

var timerEl = document.querySelector(".timer");
var timerCount = 80;
var timer;

var introduction = document.querySelector("#introduction");
var startButton = document.querySelector(".start-button");

function startTimer() {
    var timerInterval = setInterval(function() {
        timerCount--;
        timerElement.textContent = "Your Time Left: " + timerCount;
      
        if(timerCount <= 0) {
        clearInterval(timerInterval);
        introduction.setAttribute("class", "hide");
        quizElement.setAttribute("class", "hide");
        answerChoiceElement.setAttribute("class", "hide");
        resultsElement.removeAttribute("class", "hide");
        }
    }, 1000);

}

// When get to answer choice: Need to subtract 10 seconds if wrong answer!!!

function startQuiz() {

}

// When clicking start button, quiz and timer will start:
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", startTimer);