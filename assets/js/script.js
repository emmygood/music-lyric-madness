let startButton = document.getElementById('start-button');
let questionArea = document.getElementById('question-cont');

startButton.addEventListener('click', startQuiz);


function startQuiz() {
    console.log('Game started');
    startButton.classlist.add('hide');
    questionArea.classList.remove('hide');


}

function nextQuestion() {

}

function selectAnswer() {

}

const questions [
    {
        question:
        answer:
    }
];