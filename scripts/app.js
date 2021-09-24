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