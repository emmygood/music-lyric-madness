/* jshint esversion: 11 */

let startButton = document.getElementById('start-button');
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


function selectAnswer() {

}

function calculateScore() {

}

function countdownTimer() {
    
}