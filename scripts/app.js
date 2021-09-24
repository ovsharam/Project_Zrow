//Initialize racer

//------------------------------------------Show and Hide Track-----------------------------------------------------//
// for(let i = 0; i < 10; i++){



//Element Variables
const targetDiv = document.getElementById("Track");
const btn = document.getElementById("Phlash");
const redDot = document.getElementById("Red_dot");
const blueDot = document.getElementById("Blue_dot");

btn.onclick = function() {
    if (targetDiv.style.display == 'none'){
        targetDiv.style.display = 'block'
        gameBtn.style.display = 'block'
        // redDot.style.display = 'block'
        // blueDot.style.display = 'block'
    }else {
        targetDiv.style.display = 'none'
    }
}

const secondDiv = document.getElementById("Track");
const secondBtn = document.getElementById("Soniq");
secondBtn.onclick = function() {
    if (secondDiv.style.display == 'none'){
        secondDiv.style.display = 'block'
        gameBtn.style.display = 'block'
        // redDot.style.display = 'block'
        // blueDot.style.display = 'block'
    }else {
        secondDiv.style.display = 'block'
    }
}
const gameBtn = document.getElementById("Game_buttons");
if (targetDiv.style.display == 'block'){
    gameBtn.style.display = 'block';
} else {
    gameBtn.style.display = 'none'
}
// Creating && Displaying a winner
const startBtn = document.getElementById("Start_Race");
const secondDot = document.getElementById("secondRedDot");
const finalDot = document.getElementById("secondBlueDot");
startBtn.onclick = function() {
    // redDot.style.display = 'block'
    // blueDot.style.display = 'block'
    var winner = assignWinner(1,3)
    function assignWinner(min,max){
        return Math.floor(Math.random() *(max - min)) + min
        } if (winner == 1){
            // secondBtn.style.display = "none";
            // console.log("flash wins!")
            redDot.style.display = 'block'
            finalDot.style.display = 'block'
            setTimeout(function() {
                secondBtn.style.display = 'none'
            }, 6000)
            console.log(winner)
        }else {
        // btn.style.display = "none"
        // console.log("Sonic wins!")
        blueDot.style.display = 'block'
        secondDot.style.display = 'block'
        setTimeout(function(){
            btn.style.display = 'none'
        }, 6000)
        }
    };
    