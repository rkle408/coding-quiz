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
var timerCount = 60;
var timer;
var timerInterval = null;

var introduction = document.querySelector("#introduction");
var startButton = document.querySelector(".start-button");

var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector(".questions");
var answers = document.querySelector(".answers");
var currentIndex = 0;

var resultsElement = document.querySelector('#results');
var highScores = document.querySelector('#high-scores');
var scoreEl = document.querySelector("#score");
var score = 0;

// Quiz Questions
var quizQuestions = [
    {
        question: "What are functions inside of objects called?",
        answerChoice: ["Events", "Strings", "Methods", "Event listeners"],
        // correct: "Methods",
        // Can store as:
        correctIndex: 2,
    },
    {
        question: "Which naming convention do we use for CSS?",
        answerChoice: ["PascalCase", "camelCase", "snake_case", "kebab-case"],
        // correct: "kebab-case",
        correctIndex: 3,
    },
    {
        question: "In our HTML, where do we link our CSS and Javascript?",
        answerChoice: ["CSS = top, Javascript = top", "CSS = top, Javascript = bottom", "CSS = bottom, Javascript = top", "CSS = bottom, Javascript = bottom"],
        // correct: "CSS = top, Javascript = bottom",
        correctIndex: 1,
    }, 
    {
        question: "Which operator gives us A is not equal to B in type and value?",
        answerChoice: ["console.log(A !== B);", "console.log(A != B);", "console.log(A /= B);", "console.log(A || B);"],
        // correct: "console.log(A !== B);",
        correctIndex: 0,
    },
    {
        question: "How do we stop a page from refreshing when a form is submitted?",
        answerChoice: ["addEventListener('click', stopRefresh);", "event.stopPropagation();", "event.setAttribute('refresh', 'stop refresh');", "event.preventDefault();"],
        // correct: "event.preventDefault();",
        correctIndex: 3,
    },
    {
        question: "Arrays start at what index?",
        answerChoice: ["One", "Zero", "Whatever variable you set it to be", "They're not indexed"],
        // correct: "Zero",
        correctIndex: 1,
    },
]

function startTimer() {
    timerInterval = setInterval(function() {
        timerCount--;
        timerEl.textContent = "Your Time Left: " + timerCount;
      
        if(timerCount <= 0) {
        endQuiz();
        }
    }, 1000);
}

function startQuiz() {
    introduction.setAttribute("class", "hide");
    quizEl.removeAttribute("class", "hide");
    startTimer();
    displayQuestion();
}

// Want to do a separate function to display the questions so that the next one will appear after you answer one:
function displayQuestion() {
    var displayingQuestion = quizQuestions[currentIndex];
    questionEl.textContent = displayingQuestion["question"];
    answers.innerHTML = "";
    console.log(displayingQuestion);

    // With this for-loop, can have as many options without adding more code for more buttons
    for (let i = 0; i < displayingQuestion["answerChoice"].length; i++) {
        var userAnswer = displayingQuestion["answerChoice"][i];
        var userAnswerBtn = document.createElement("button");
        userAnswerBtn.setAttribute("class", "answer");
        userAnswerBtn.setAttribute("data-index", i);
        userAnswerBtn.textContent = `${i + 1}. ${userAnswer}`
        userAnswerBtn.addEventListener('click', choiceClickHandler)
        answers.append(userAnswerBtn);
        };
}

// Need to do event.target
function choiceClickHandler (event) {
    console.log(event.target.dataset.index);
    // want to check
    if (quizQuestions[currentIndex].correctIndex == event.target.dataset.index){
        console.log('correct answer');
        score++;
    } else {
        console.log('wrong choice');
        // When get to answer choice: Need to subtract 10 seconds if wrong answer!!!
        timerCount -=10;
        // Check remaining time, if it is <= 0, then end the quiz 

    if (timerCount <= 0) {
        endQuiz();
        return;
        }
    }
    // Display next question
    currentIndex++;
    if (currentIndex >= quizQuestions.length) { 
    return;
    }
    displayQuestion();
}

// Make a separate function to end quiz since there are many different cases where we would want to end the quiz
function endQuiz (){
    introduction.setAttribute("class", "hide");
    quizEl.setAttribute("class", "hide");
    clearInterval(timerInterval);
    timerEl.textContent = "Your time is up!"
    resultsElement.removeAttribute("class", "hide");
        // display and store high scores
    //console.log(score);
    scoreEl.textContent = score;
}

// When clicking start button, quiz and timer will start:
startButton.addEventListener("click", startQuiz);