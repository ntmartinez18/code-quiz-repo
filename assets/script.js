// created global variable to be accessed later
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
var answerButton = document.querySelectorAll("#answer-button");
var timerElement = document.getElementById("timer");
var questionElement = document.getElementById("question-container");
var startScreen = document.getElementById("start-screen")

var count = 60;
var score = 0;
var index = 0;
var timer;
var timerCount;
var currentQuestion;
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
    currentQuestion = 0;
    startButton.setAttribute("style", "display: none")
    startScreen.setAttribute("style", "display: none")
    renderQuestions()
    renderResponses()
    startCountDown()
    checkResponse()
};

// created function to run when the game is over
function gameOver() {
    startButton.setAttribute("style", "display: inline")
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
    console.log("Questions are being rendered")}
    // Navigate through list of questions
  function navigate(direction) {
    index = index + direction;
    // If you try to navigate 'back' from the start
    // Go to last question
    if (index < 0) { 
      index = questions.length - 1; 
    questionElement.textContent = questions[index].questions
    // currentQuestion = questions[""];
    // chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
    // for (var i=0; i < questions.length; i++) {
    // }
    // questionElement = setAttribute("style", "display: inline");
    }
};

// created function for response options to be rendered to page
function renderResponses() {
    console.log("Responses are being rendered");
    // answerButton.setAttribute("style", "display: inline");
};

// created function to check if user response is correct/incorrect
function checkResponse() {
    console.log("response is checked");
        if (userResponse == questions[index].answer) {
        score += 25;
    } else if (userResponse !== questions[index].answer) {
        timerCount-10;
    }
};





// check what is clicked on and make sure its a button 
// check what answer is clicked and then compare it to the right answer
// if correct
// call navigate function

// navigate (0);
// nextButton.addEventListener("click", function(event)) {
//     event.stopPropagation();