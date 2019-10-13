
var questions = [
    {
        title: "Commonly used data types DO NOT include:", choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts",
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["Quotes", "Curly brackets", "Parentheses", "Square Brackets"],
        answer: "Parentheses",
    },
    {
        title: "What is an example of a self closing HTML?.",
        choices: ["Div", "P", "Img", "H1"],
        answer: "Img",
    },
    {
        title: "Which language is considered the structure of a webpage?.",
        choices: ["JavaScript", "HTML", "CSS", "Bootstrap"],
        answer: "HTML",
    },
    {
        title: "An array is a structure for  ____.",
        choices: ["Images", "Comments", "Links", "Data"],
        answer: "Data",
    },
];
var round = 0;
var score = 0;

//Function cycles and displays each object in the array and displays in HTML body
function renderQuestion() {
    // Properties of objects
    var title = questions[round].title;
    var choices = questions[round].choices;
    // Identifies HTML tags
    var titleEl = document.querySelector(".title");
    var choicesEl = document.querySelector(".buttons");
    //Remove old hoices inserted into HTML button text
    choicesEl.innerHTML = "";

    //Creating button elements, assigning: text; attributes, and appendingChild to HTML parent
    titleEl.textContent = title;
    for (var i = 0; i < choices.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = choices[i];
        btn.setAttribute("class", "choice")
        choicesEl.appendChild(btn);
    }
}
// function handles the button clicked by user and generates the next question
document.addEventListener("click", function (e) {
    var target = e.target;
    console.log(target.classList.contains("choice"));
    if (target.classList.contains("choice")) {
        var correctAnswer = questions[round].answer;
        if (correctAnswer == target.textContent) {
            alert("Correct!");
            score++;
        }
        else {
            alert("Incorrect!")
        }
        round++;
        if (round < questions.length) {
            renderQuestion();
        }
        // Hides questions after final question in array is completed and renders the previously hidden form for user initials
        else {
            var eraseQuestionArea = document.querySelector(".questionArea");
            eraseQuestionArea.style.display = 'none';
            var showHighScore = document.querySelector(".submitHighScore");
            showHighScore.style.display = 'block';
        }
        // renderQuestion();
        // Now you need to compare the text content of this element against the correct answer in your questions array
        // You do this using the round variable like above
        // Correct answer = questions[round].answer
        // If the text content of this target is the same as the correct answer, update their score
        // Then, regardless, update the round
        // Then, call renderQuestion()
    }
})

// renderQuestion()



// initialize timer upon pressing the start button, launch function renderQuestion()
var count = 75
var startq = document.getElementById("startQ")

startq.addEventListener("click", function (e) {
    e.preventDefault()
    renderQuestion();
    document.getElementById('startDiv').style.display = 'none';
    var interval = setInterval(function () {
        document.getElementById('count').innerHTML = count;
        count--;
        if (count === 0) {
            clearInterval(interval);
            document.getElementById('count').innerHTML = 'Done';
            // or...
            alert("You're out of time!");
        }
    }, 1000);


})