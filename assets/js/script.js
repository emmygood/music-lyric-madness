/* jshint esversion: 11 */

let startButton = document.getElementById('start-button');
let restartButton = document.getElementById('restart-button');
let reloadButton = document.getElementById('reload-button');
let nextButton = document.getElementById('next-button');
let questionArea = document.getElementById('question-cont');
let questionDiv = document.getElementById('question');
let answerBtns = document.getElementById('answer-btns');
let intro = document.getElementById('intro');
let scoreArea = document.getElementById('score-area');
let correctIncremented = false;
let incorrectIncremented = false;
let correctScore = 0;
let incorrectScore = 0;

let questionsShuffled = null;
let questionNumber = 0;

// start button and next button, the question number incrementing by one, leading onto the nextQuesiton function
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    questionNumber++;
    nextQuestion();
});

// Function to get all of the questions and shuffle them each time
function shuffleQuestions() {
    questionsShuffled = questions.sort(() => Math.random() - 0.5);
}

// Function to the start the quiz, with certain buttons and question section hidden
function startQuiz() {
    startButton.classList.add('hide');
    intro.classList.add('hide');
    reloadButton.classList.remove('hide');
    questionArea.classList.remove('hide');
    scoreArea.classList.remove('hide');
    questionNumber;
    shuffleQuestions();
    nextQuestion();
}

// Function to move onto next question, whilst shuffling 
function nextQuestion() {
    resetQuiz();
    displayQuestion(questionsShuffled[questionNumber]);
}

// Function to display the question and loop through them, and adding the answers to the answer buttons
function displayQuestion(question) {
    questionDiv.innerText = `Q${questionNumber + 1}: ${question.question}`;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerBtns.appendChild(button);
    });

}

// resetQuiz function to reset the quiz back to its defualt state everytime a new question is set
function resetQuiz() {
    nextButton.classList.add('hide');
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.classList.remove('disable');
    });
}

// function to check what answer has been selected and looping through them to check if it is correct or not
function selectAnswer(i) {
    const chosenButton = i.target;
    Array.from(answerBtns.children).forEach(button => {
        button.classList.add('disable');
        setQuizClass(button, button.dataset.correct, chosenButton);
    });
    if (questionsShuffled.length > questionNumber + 1) {
        nextButton.classList.remove('hide');
        correctIncremented = false;
        incorrectIncremented = false;
    } else {
        questionArea.classList.add('hide');
        endGame();
        // restartButton.classList.remove('hide');
    }
}

restartButton.addEventListener('click', reLoadQuiz);
reloadButton.addEventListener('click', reLoadQuiz);

// function to allow the user to return to index.html if they want to start the quiz from the beginning 
function reLoadQuiz() {
    window.location.reload();
}

// function to add the right class to the chosenButton, correct or incorrect, turning it either green or red
function setQuizClass(element, correct, chosenButton) {
    clearQuizClass(element);
    if (correct) {
        element.classList.add('correct');
        if (!correctIncremented && chosenButton.dataset.correct) {
            addCorrect();
        }
    } else {
        element.classList.add('incorrect');
        if (!incorrectIncremented && chosenButton.dataset.correct == undefined) {
            addIncorrect();
        }
    }
}

// function to increment the score by 1 if answer chosen correctly, adding to the score area, and displaying to the user
function addCorrect() {
    correctScore = parseInt(document.getElementById('correct-scores').innerText);
    document.getElementById('correct-scores').innerText = ++correctScore;
    correctIncremented = true;
}

// function to increment the score by 1 if the user gets the answer wrong, and adding the number to the score area
function addIncorrect() {
    incorrectScore = parseInt(document.getElementById('incorrect-scores').innerText);
    document.getElementById('incorrect-scores').innerText = ++incorrectScore;
    incorrectIncremented = true;
}

// function removing the correct and incorrect class on the chosen button answer
function clearQuizClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

// endGame function to store the users scores to local storage, redirecting them to the end.html page 
function endGame() {
    localStorage.setItem("score", correctScore);
    return window.location.assign("end.html");
}