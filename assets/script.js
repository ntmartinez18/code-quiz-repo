// created global variable to be accessed later
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
var answerButton = document.querySelectorAll("#answer-button");
var timerElement = document.getElementById("timer");


var count = 60;
var score = 0;
var timer;
var timerCount;
var chosenQuestion = "";
var userResponse = "";

// create var for questions index
var questions = [
    { question: "What is JavaScript?", responses: [ "A type of font", "A programming language on the Web", "A coffee shop", "None of these"], answer: 1 },
    { question: "What is a JavaScript function?", responses: [ "block of code used to perform a specific task", "Hyper Text Markup Language", "Another name for a barista", "None of these"], answer: 0 },
    { question: "What method can be utilized in the debugging process to display data?", responses: [ "blending", "command + P", "console.log", "None of these"], answer: 2 },
    { question: "What are JavaScript variables?", responses: [ "JavaScript Notation Object", "containers for storing data", "event handlers", "None of these"], answer: 1 },
    { question: "JavaScript strings are used for which of the following?", responses: [ "embroidery", "to add style", "to store and manipulate data", "None of these"], answer: 2 },
];


// added click event listener 
startButton.addEventListener("click", startGame);

// created function when the game is started to start the timer and begin counting down
function startGame() {
    console.log("started")
    timerCount = 60;
    startButton.classList.add("hide")
    renderQuestions()
    renderResponses()
    startCountDown()
};

// created function to run when the game is over
function gameOver() {
    startButton.classList.add("show")
    displayScore;
};

// created function for timer to countdown 
function startCountDown() {
    console.log("timer started")
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            gameOver();
        }
        }, 1000);
};


// creates questions that will be rendered on screen
function renderQuestions() {
    console.log("Questions are being rendered")
    chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
};

// created function for response options to be rendered to page
function renderResponses() {
    console.log("Responses are being rendered")
    nextButton.classList.add("show")
};





// function Navigate


// function setNext() {

// };

// function selectAnswer() {

// };