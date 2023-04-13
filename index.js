let homeScore;
let awayScore;
homeScore = 0;
awayScore = 0;

let scoreHome = document.getElementById("score-home");
let scoreAway = document.getElementById("away-score");

scoreHome.textContent = homeScore;
scoreAway.textContent = awayScore;

function addoneHm() {
    homeScore += 1;
    scoreHome.textContent = homeScore;
}

function addtwoHm() {
    homeScore += 2;
    scoreHome.textContent = homeScore;
}

function addthreeHm() {
    homeScore += 3;
    scoreHome.textContent = homeScore;
}

function addoneAw() {
    awayScore += 1;
    scoreAway.textContent = awayScore;
}

function addtwoAw() {
    awayScore += 2;
    scoreAway.textContent = awayScore;
}

function addthreeAw() {
    awayScore += 3;
    scoreAway.textContent = awayScore;
}

function newgame() {
    scoreHome.textContent = 0;
    scoreAway.textContent = 0;
    homeScore = scoreHome.textContent;
    awayScore = scoreAway.textContent;
} 