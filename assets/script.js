// created global variable to be accessed later
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
var answerButton = document.querySelector("#answer-buttons");
var timerElement = document.getElementById("timer");
var questionElement = document.getElementById("question");
var startScreen = document.getElementById("start-screen")
var questionContainer = document.querySelector(".question-container")
var inputInitials = document.querySelector(".input-initials")
var userInput = document.getElementById("userInput")
var submitbtn = document.getElementById("submit-btn");
var scoreEL = document.getElementById("score")

var count = 60;
var score = 0;
var index = 0;
var timer;
var timerCount;
var currentQuestion;
var userArray = [];

// create var for questions index
var questions = [
    { question: "What is JavaScript?", responses: [ "A type of font", "A programming language on the Web", "A coffee shop", "None of these"], answer: "A programming language on the Web"},
    { question: "What is a JavaScript function?", responses: [ "block of code used to perform a specific task", "Hyper Text Markup Language", "Another name for a barista", "None of these"], answer: "block of code used to perform a specific task" },
    { question: "What method can be utilized in the debugging process to display data?", responses: [ "blending", "command + P", "console.log", "None of these"], answer: "console.log" },
    { question: "What are JavaScript variables?", responses: [ "JavaScript Notation Object", "containers for storing data", "event handlers", "None of these"], answer: "containers for storing data" },
    { question: "JavaScript strings are used for which of the following?", responses: [ "embroidery", "to add style", "to store and manipulate data", "None of these"], answer: "to store and manipulate data" },
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
    startCountDown()
};

// created function to run when the game is over
function gameOver() {
    questionContainer.style.display="none"
    clearInterval(timer);
    inputInitials.classList.replace("hide", "show")
    scoreEL.textContent=`Your score: ${score}`
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
    if (index === questions.length) { 
        gameOver()}
    questionContainer.classList.replace("hide", "show");
    questionElement.textContent = questions[index].question
    console.log("questions object",questions[index]);
    console.log("list of responses", questions[index].responses);
    // Clears the html by settting innerHTML to an empty string.
    answerButton.innerHTML = "";
    for (var i = 0; i < questions[index].responses.length; i++ ) {
      console.log(questions[index].responses[i]);
      var btn = document.createElement("button")
      btn.textContent = questions[index].responses[i];
      btn.setAttribute("class", "answer-button")
    answerButton.append(btn);
    }
}

// created function to check if user response is correct/incorrect
function checkResponse(userResponse) {
    console.log("response is checked");
        if (userResponse == questions[index].answer) {
        score += 25;
        index++
        renderQuestions()
    } else {
        timerCount-10;
        index++
        renderQuestions()
    }
};

function storage(initials) {
    if (initials !== ""){
        userArray = JSON.parse(localStorage.getItem("highscores")) || []
        var user = {
            initials:initials,
            score:score,
        }
        userArray.push(user)
        localStorage.setItem("highscores", JSON.stringify(userArray))
        window.location.assign("scorepage.html")
    }
};

answerButton.addEventListener("click", ()=>{
    var userChoice = this.event.target.textContent
    checkResponse(userChoice);
})

submitbtn.addEventListener("click", ()=>{
    var userInitials = userInput.value
    storage(userInitials)
} )
