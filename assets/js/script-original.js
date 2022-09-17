var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer");
var quizElement = document.querySelector("#quiz");
var resultsElement = document.querySelector("#results");
var answerChoiceElement = document.querySelector(".answers");

var timer;
var timerCount = 80;
var score = 0;
var displayingQuestionIndex = 0;
var displayingAnswerIndex = 0;

// Need functions to:
// start button to... (done)
// start game to and (done)
// start timer and... (half done)
// start questions, (half done)
// submit initials leads to high scores page

// Need style to hide:
// start button
// questions
// end of quiz

// Quiz Questions
var quizQuestions = [
    {
        question: "What are functions inside of objects called?",
        answerChoice: ["Events", "Strings", "Methods", "Event listeners"],
        correct: "Methods",
    },
    {
        question: "Which naming convention do we use for CSS?",
        answerChoice: ["PascalCase", "camelCase", "snake_case", "kebab-case"],
        correct: "kebab-case",
    },
    {
        question: "In our HTML, where do we link our CSS and Javascript?",
        answerChoice: ["CSS = top, Javascript = top", "CSS = top, Javascript = bottom", "CSS = bottom, Javascript = top", "CSS = bottom, Javascript = bottom"],
        correct: "CSS = top, Javascript = bottom",
    }, 
    {
        question: "Which operator gives us A is not equal to B in type and value?",
        answerChoice: ["console.log(A !== B);", "console.log(A != B);", "console.log(A /= B);", "console.log(A || B);"],
        correct: "console.log(A !== B);",
    },
    {
        question: "How do we stop a page from refreshing when a form is submitted?",
        answerChoice: ["addEventListener('click', stopRefresh);", "event.stopPropagation();", "event.setAttribute('refresh', 'stop refresh');", "event.preventDefault();"],
        correct: "event.preventDefault();",
    },
    {
        question: "Arrays start at what index?",
        answerChoice: ["One", "Zero", "Whatever variable you set it to be", "They're not indexed"],
        correct: "Zero",
    },
]

// Need a start function for when we click the start button for the quiz and timers to start
function startQuiz() {
    // Always console.log or alert to test connection to HTML!:
    // console.log("hello!");
    
    // When quiz starts, intro should disappear then questions should pop up in it's place:
    var introElement = document.querySelector("#introduction");
    introElement.setAttribute("class", "hide");

    // Now you want timer and quiz to start:
    quizElement.removeAttribute("class", "hide");

    var displayingQuestion = quizQuestions[displayingQuestionIndex];
    var questionTitle = document.querySelector(".questions");
        questionTitle.textContent = displayingQuestion["question"];
    
    // Will need a for-loop for answer choices!
    for (index = 0; index < displayingQuestion["answerChoice"].length; index++); {
        var userAnswer = displayingQuestion["answerChoice"][index];
        var userAnswerBtn = document.createElement("button");
        userAnswerBtn.setAttribute("class", "answer");
        userAnswerBtn.setAttribute("value", userAnswer);
        userAnswerBtn.textContent = `${index + 1}. ${userAnswer}`
        answerChoiceElement.appendChild(userAnswerBtn);
        };
}

function startTimer() {
    var timerInterval = setInterval(function() {
        timerCount--;
        timerElement.textContent = "Your Time Left: " + timerCount;
      
        if(timerCount === 0) {
        clearInterval(timerInterval);
        startButton.setAttribute("class", "hide");
        quizElement.setAttribute("class", "hide");
        answerChoiceElement.setAttribute("class", "hide");
        resultsElement.removeAttribute("class", "hide");
        }
    }, 1000);
    // Need to subtract 10 seconds if wrong answer!!!
}



// Declare startQuiz and startTimer functions!
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", startTimer);