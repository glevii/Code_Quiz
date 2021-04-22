var startBtn = document.querySelector(".startBtn");
var introPage = document.querySelector(".intro");
var page1 = document.querySelector(".page1");
var stopwatch = document.querySelector(".stopwatch");

startBtn.addEventListener("click", startGame);

var questionArray = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        answer: 2

    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["1. Quotes", "2. Curly brackets", "3. Parentheses", "4. Square Brackets"],
        answer: 2

    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All the above"],
        answer: 3
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parentheses"],
        answer: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. Terminal / Bash", "3. For loops", "4. Console log"],
        answer: 3
    }
]
var questionIndex = 0
var secondsRemaining = questionArray.length * 15
var stopClock = ""

function startGame() {
    introPage.classList.add("hide")
    page1.classList.remove("hide")
    stopClock = setInterval(countDown, 1000)
    nextQuestion();
}

function countDown() {
    secondsRemaining--
    stopwatch.textContent = secondsRemaining;
}

function nextQuestion() {
    questionIndex++;
    if (questionIndex >= questionArray.length) {
        clearInterval(stopClock);
        generateCompletePage();
    } else {
        generateQuestions();
    }
}

// var currentTopScores = localStorage.getItem("topScores"), // {}
// if (!currentTopSCores) {
    //currentTopScores = [];
    // else 
    // currentTopScores = JSON.parse(currentTOpSCores)
// })

// function generateCompletePage() {
    // can hide the page1. innerhtml
    // show your results sections - unhide it - classList
    // need a queryselector on the final score of what it is, add a div to html.
    // document.getElementById("fincak-score"/innerhtml.textContect = seconds remaining;)
    // selector for initials input, then a var submit button
    // submit button add event listener on click initialsInput.value + seconds remaining - then save in local storage.
    ////// local storage takes in strings, but we want to store their initials and the score. Therefore I need to save it as an object 
    // score = {initials: initialsInput.value, score: secondsRemaining}
    // currentTopScores.push(score):
    // localStorage.setItem("topScores", JSON.stringify(currentTopScores)
    
// }

function generateQuestions() {
    page1.innerHTML = `
<h2>${questionArray[questionIndex].question}</h2>
<button class="choicesBtn">${questionArray[questionIndex].choices[0]}</button>
<br>
<button class="choicesBtn">${questionArray[questionIndex].choices[1]}</button>
<br>
<button class="choicesBtn">${questionArray[questionIndex].choices[2]}</button>
<br>
<button class="choicesBtn">${questionArray[questionIndex].choices[3]}</button>
<br>
<p class="correct"></p>
<p class="incorrect"></p>
`
    var choicesBtn = document.querySelectorAll(".choicesBtn")

    for (let i = 0; i < choicesBtn.length; i++) {
        choicesBtn[i].addEventListener("click", function () {
            if (i === questionArray[questionIndex].answer) {
                nextQuestion();
            } else {
                secondsRemaining = secondsRemaining - 10;
                nextQuestion();
            }
        });

    }

}