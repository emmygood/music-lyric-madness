/* jshint esversion: 11 */

let finalScore = document.getElementById('final-score');
let updatedScore = localStorage.getItem('score');
let endImage = document.getElementById('end-image');

finalScore.innerText = updatedScore;

let scoreQuiz = parseInt(updatedScore);

let endScore = "";

if (scoreQuiz <= 4) {
    endScore = "Bad luck! Have another go";
    endImage.src = 'assets/images/broken.jpg';
} else if (scoreQuiz >= 5 && scoreQuiz <= 7) {
    endScore = "You know your stuff!";
    endImage.src = 'assets/images/microp.jpg';
} else {
    endScore = "Wow! Look at you go";
    endImage.src = 'assets/images/winner1.jpg';
}

let message = document.getElementById('message');
message.innerText = endScore;