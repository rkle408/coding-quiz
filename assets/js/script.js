var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer");
var quizElement = document.querySelector("#questions");

var timer;
var timerCount = 80;
var score = 0;

// Need functions to:
// start button to... (done)
// start game to...
// start timer and...
// start questions,
// submit initials leads to high scores page

// Need style to hide:
// start button
// questions
// end of quiz

// Will need a for-loop later...
//for (var i=0; i < quizQuestions.length; i++); {
    
//}

// Will probablly need more variables as we go

// Quiz Questions
var quizQuestions = [
    {
        question: "What are functions inside of objects called?",
        1: "Events",
        2: "Strings",
        3: "Methods",
        4: "Event listeners",
        correct: "3",
    },
    {
        question: "Which naming convention do we use for CSS?",
        1: "PascalCase",
        2: "camelCase",
        3: "snake_case",
        4: "kebab-case",
        correct: "4",
    },
    {
        question: "In our HTML, where do we link our CSS and Javascript?",
        1: "CSS = top, Javascript = top",
        2: "CSS = top, Javascript = bottom",
        3: "CSS = bottom, Javascript = top",
        4: "CSS = bottom, Javascript = bottom",
        correct: "2",
    }, 
    {
        question: "Which operator gives us A is not equal to B in type and value?",
        1: "console.log(A !== B);",
        2: "console.log(A != B);",
        3: "console.log(A /= B);",
        4: "console.log(A || B);",
        correct: "1",
    },
    {
        question: "How do we stop a page from refreshing when a form is submitted?",
        1: "addEventListener('click', stopRefresh);",
        2: "event.stopPropagation();",
        3: "event.setAttribute('refresh', 'stop refresh');",
        4: "event.preventDefault();",
        correct: "4",
    },
    {
        question: "Arrays start at what index?",
        1: "One",
        2: "Zero",
        3: "Whatever variable you set it to be",
        4: "They're not indexed",
        correct: "2",
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
    quizElement.removeAttribute("class");

//    timerCount;
//    startButton.disabled = true;
//    startTimer();
}

//function startTimer() {

//}

// Declare startQuiz function!
startButton.addEventListener("click", startQuiz);