// getting values from html
let gameScoreHome = document.getElementById("home-p");
let gameScoreAway = document.getElementById("guest-p");

// HOMESCORES
function addOne() {
    gameScoreHome.innerHTML = parseInt(gameScoreHome.innerHTML) + 1;
    return gameScoreHome.innerHTML;
}
function addTwo() {
    gameScoreHome.innerHTML = parseInt(gameScoreHome.innerHTML) + 2;
    return gameScoreHome.innerHTML;
}
function addThree() {
    gameScoreHome.innerHTML = parseInt(gameScoreHome.innerHTML) + 3;
    return gameScoreHome.innerHTML;
}

// AWAYSCORES

function addOne4() {
    gameScoreAway.innerHTML = parseInt(gameScoreAway.innerHTML) + 1;
    return gameScoreAway.innerHTML;
    
}
function addTwo5() {
    gameScoreAway.innerHTML = parseInt(gameScoreAway.innerHTML) + 2;
    return gameScoreAway.innerHTML;
    
}
function addThree6() {
    gameScoreAway.innerHTML = parseInt(gameScoreAway.innerHTML) + 3;
    return gameScoreAway.innerHTML;
    
}

// RESET
let newGame = document.getElementById("game-btn");
newGame.addEventListener("click", function(){
    scoreHome = 0;
    scoreAway = 0;
    gameScoreHome.innerHTML = scoreHome;
    gameScoreAway.innerHTML = scoreAway;
});

// // HIGHLIGHTING LEADERBOARD

// if (gameScoreHome.innerHTML > gameScoreAway.innerHTML) {
//     gameScoreHome.style.backgroundColor = "green";
//     gameScoreAway.style.backgroundColor = "red";
// } else if(scoreHome < gameScoreAway.innerHTML) {
//     gameScoreHome.style.backgroundColor = "red";
//     gameScoreAway.style.backgroundColor = "green";
    
// } else {
//     gameScoreHome.style.backgroundColor = "white";
//     gameScoreAway.style.backgroundColor = "white";
// }
