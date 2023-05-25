/* jshint esversion: 11 */

let startButton = document.getElementById('start-button');
let nextButton = document.getElementById('next-button');
let questionArea = document.getElementById('question-cont');
let questionDiv = document.getElementById('question');
let answerBtns = document.getElementById('answer-buttons');


let questionsShuffled = null;
let questionNumber = 0;

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    questionNumber++;
    nextQuestion();
})

function shuffleQuestions() {
    questionsShuffled = questions.sort(() => Math.random() - 0.5);
}


function startQuiz() {
    startButton.classList.add('hide');
    questionArea.classList.remove('hide');
    questionNumber;
    shuffleQuestions();
    nextQuestion();


}

function nextQuestion() {
    resetQuiz();
    displayQuestion(questionsShuffled[questionNumber]);


}

function displayQuestion(question) {
    questionDiv.innerText = question.question;
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

function resetQuiz() {
    clearQuizClass(document.body);
    nextButton.classList.add('hide');
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(i) {
    const chosenButton = i.target;
    const correct = chosenButton.dataset.correct;
    setQuizClass(document.body, correct);
    Array.from(answerBtns.children).forEach(button => {
        setQuizClass(button, button.dataset.correct);
    })
    if (shuffleQuestions.length > questionNumber + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart Quiz';
        startButton.classList.remove('hide');
    }
    

}

function setQuizClass(element, correct) {
    clearQuizClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }

}


function clearQuizClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

function calculateScore() {

}

function countdownTimer() {
    
}