// created global variable to be accessed later
const startButton = document.getElementById("start-button");

// create var for questions index will be the questions
var questions = [
    { question: "What is JavaScript?", responses: [ "A type of font", "A programming language on the Web", "A coffee shop", "None of these"], answer: 1 },
    { question: "What is a JavaScript function?", responses: [ "block of code used to perform a specific task", "Hyper Text Markup Language", "Another name for a barista", "None of these"], answer: 0 },
    { question: "What method can be utilized in the debugging process to display data?", responses: [ "blending", "command + P", "console.log", "None of these"], answer: 2 },
    { question: "What are JavaScript variables?", responses: [ "JavaScript Notation Object", "containers for storing data", "event handlers", "None of these"], answer: 1 },
    { question: "JavaScript strings are used for which of the following?", responses: [ "embroidery", "to add style", "to store and manipulate data", "None of these"] },
];


// added click event listener 
startButton.addEventListener("click", startGame);

function startGame() {
    console.log("started")
};

// function setNext() {

// };

// function selectAnswer() {

// };