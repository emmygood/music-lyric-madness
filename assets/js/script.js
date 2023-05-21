/* jshint esversion: 11 */

let startButton = document.getElementById('start-button');
let nextButton = document.getElementById('next-button');
let questionArea = document.getElementById('question-cont');
let questionDiv = document.getElementById('question');
let answerBtns = document.getElementById('answer-buttons');

let questionsShuffled = null;
let questionNumber = 0;

startButton.addEventListener('click', startQuiz);

function shuffleQuestions() {
    questionsShuffled = questions.sort(() => Math.random() - 0.5);
}


function startQuiz() {
    console.log('Game started');
    startButton.classList.add('hide');
    questionArea.classList.remove('hide');
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
        let btn = document.createElement('button');
        btn.innerText = answer.text;
        btn.classList.add('btn');
        answerBtns.appendChild(btn);
    });

}

function resetQuiz() {
    nextButton.classList.add('hide');
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(i) {
    const chosenButton = i.target;
    const right = chosenButton.dataset.right;
    setQuizClass(document.body, right);
    Array.from(answerBtns.children).forEach(button => {
        setQuizClass(button.dataset.right);
    })

}

function setQuizClass(element, right) {
    clearQuizClass(element);
    if (right) {
        element.classList.add('right');
    } else {
        element.classList.add('wrong');
    }

}

function clearQuizClass() {
    element.classList.remove('right');
    element.classList.remove('wrong');
}

function calculateScore() {

}

function countdownTimer() {
    
}