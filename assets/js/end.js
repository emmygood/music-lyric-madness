/* jshint esversion: 11 */

let finalScore = document.getElementById('final-score');
let updatedScore = localStorage.getItem('updatedScore');

finalScore.innerText = updatedScore;

let scoreQuiz = parseInt(updatedScore);

endScore = "";

if (scoreQuiz <= 4) {
    endScore = "Bad luck! have another go";
    let imageResult = document.createElement('img');
    imageResult.src = 'assets/images/broken.jpg';
    document.getElementById('end-image').appendChild(imageResult);
} else if (scoreQuiz >= 5 && scoreQuiz <= 7) {
    endScore = "You know your stuff!";
    let imageResult = document.createElement('img');
    imageResult.src = 'assets/images/microp.jpg';
    document.getElementById('end-image').appendChild(imageResult);
} else {
    endScore = "Wow! Look at you go";
    let imageResult = document.createElement('img');
    imageResult.src = 'assets/images/winner.jpg';
    document.getElementById('end-image').appendChild(imageResult);
}

message = document.getElementById('message');
messageBox = document.createTextNode(endScore);
message.appendChild.messageBox;