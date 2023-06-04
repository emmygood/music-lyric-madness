/* jshint esversion: 11 */

let finalScore = document.getElementById('final-score');
let updatedScore = localStorage.getItem('score');
let endImage = document.getElementById('end-image');

finalScore.innerText = updatedScore;

// check the users score
let scoreQuiz = parseInt(updatedScore);

// response to the user depending of what score they got
let endScore = "";

if (scoreQuiz <= 4) {
    // response and image for a low score
    endScore = "Bad luck! Have another go";
    endImage.src = 'assets/images/broken.jpg';
} else if (scoreQuiz >= 5 && scoreQuiz <= 7) {
    // response and image for average score
    endScore = "You know your stuff!";
    endImage.src = 'assets/images/microp.jpg';
} else {
    // response and image for a great score
    endScore = "Wow! Look at you go";
    endImage.src = 'assets/images/winner1.jpg';
}

// taking the final score and displaying the message and image depending on it
let message = document.getElementById('message');
message.innerText = endScore;