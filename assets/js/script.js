// VARIABLE DECLARATIONS
//Quiz questions to be displayed to the user
var questions = [
  {
    question: "Commonly used data types DO Not Include?",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers",
    answer: "alerts",
  },
  {
    question:
      "String values must not be enclosed within ____ when being assigned to variables?",
    choice1: "commas",
    choice2: "curly brackets",
    choice3: "quotes",
    choice4: "parenthesis",
    answer: "quotes",
  },
  {
    question: "The condition an if / else statement is enclosed with _______.",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "parenthesis",
    choice4: "square brackets",
    answer: "curly brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "booleans",
    choice4: "all of the above",
    answer: "all of the above",
  },
];
//Various elements from the HTML page being targeted for JS functionality
var startContainer = document.getElementById("start");
var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("startBtn");
var endResults = document.getElementById("results");
var questionTitle = document.getElementById("question");
var userScore = 0;
var highScores = document.getElementById("scores");
var answerButtons = document.getElementById("btn");
var choices = Array.from(document.getElementsByClassName("btn"));
var currentQuestion = 0;
var acceptingAnswers = false;
var availableQuestions = [];
var questionCounter;
var maxQuestions = 4;

//The beginning of the quiz, pressing the start button to kick off the process.
startButton.addEventListener("click", startGame);

//The startGame function, initiated by the button click and displaying the questions
function startGame() {
  startContainer.classList.add("hide");
  quizContainer.classList.remove("hide");
  questionCounter = 0;
  availableQuestions = [...questions];
  displayQuestion();
  setTime();
}

//The displayQuestion function iterates over an array to pass the question title and the questions over the HTML elements (h1 and buttons)
displayQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    return window.location.assign("./scores.html");
  }
  currentQuestion = availableQuestions[questionCounter];
  questionTitle.textContent = currentQuestion.question;

  choices.forEach((choice) => {
    var number = choice.dataset["number"];
    choice.textContent = currentQuestion["choice" + number];
  });

  acceptingAnswers = true;
  console.log(acceptingAnswers);
};

choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    var selectedChoice = event.target;
    var selectedAnswer = selectedChoice.dataset["number"];
    console.log(event.target);
    questionCounter++;
    displayQuestion();
  });
});

//TIMER STARTER CODE
//Once the start button is pressed, the timer will begin, informing the user of the remaining time.
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var setToZero = 0;

function setTime() {
  // Sets interval in variable
  if (setToZero === 0) {
    setToZero = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time left: " + secondsLeft;

      if (secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(setToZero);
      }
    }, 1000);
  }
}
