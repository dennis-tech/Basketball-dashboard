// getting values from html

let gameScoreHome = document.getElementById("home-p");
let gameScoreAway = document.getElementById("guest-p");

gameScoreHome.innerHTML = 0;
gameScoreAway.innerHTML = 0;

document.getElementById('values-1').addEventListener('click',addOne);
document.getElementById('values-2').addEventListener('click',addTwo);
document.getElementById('values-3').addEventListener('click',addThree);
document.getElementById('values-4').addEventListener('click',addOne4);
document.getElementById('values-5').addEventListener('click',addTwo5);
document.getElementById('values-6').addEventListener('click',addThree6);
document.getElementById("game-btn").addEventListener("click", reset);

// homeScores

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

// awayScores

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

// reset

function reset(){
    gameScoreHome.innerHTML = 0;
    gameScoreAway.innerHTML = 0;
}





