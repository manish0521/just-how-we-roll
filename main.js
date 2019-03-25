/*
# ========================================================
# = Initialization
# ========================================================
*/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

window.onload = init;



function init() {
    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.addEventListener('click', rollD6);

    const doubleD6Roll1 = document.querySelector('#double-d6-roll-1');
    doubleD6Roll1.addEventListener('click', rollDoubleD6);
    const doubleD6Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD6Roll2.addEventListener('click', rollDoubleD6);

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.addEventListener('click', rollD12);
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.addEventListener('click', rollD20);

    const resetButton = document.querySelector('#reset-button')
    resetButton.addEventListener('click', resetAllRolls);

    setStartingImages();
}

function setStartingImages() {
    const START_DIRECTORY = './images/start'
    const SIX_SIDED_START_IMAGE = `${START_DIRECTORY}/d6.png`;

    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.src = SIX_SIDED_START_IMAGE;

    const doubleD12Roll1 = document.querySelector('#double-d6-roll-1')
    const doubleD12Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD12Roll1.src = SIX_SIDED_START_IMAGE;
    doubleD12Roll2.src = SIX_SIDED_START_IMAGE;

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.src = `${START_DIRECTORY}/d12.jpeg`;
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.src = `${START_DIRECTORY}/d20.jpg`;
}

/*
# ========================================================
# = Roll Functions
# ========================================================
 */

function rollD6(){
    const random = Math.random();
    const input = random * 6;
    const rolls = Math.ceil(input);
    sixes.push(rolls);


    const mean = myMean(sixes);
    const median = myMedian(sixes);

    
    const meanPrint = document.querySelector('#d6-rolls-mean')
    meanPrint.innerText = mean;
    const medianPrint = document.querySelector('#d6-rolls-median');
    medianPrint.innerText = median;


    
    const rollSrc = mySixSidedImage(rolls);
    const rollImage = document.querySelector('#d6-roll');
    rollImage.src = rollSrc;

}

function rollDoubleD6(){

    const roll1 = getRandomNumber(6);
    const roll2 = getRandomNumber(6);
    const rolls = roll1 + roll2;
    doubleSixes.push(rolls);


    const mean = myMean(doubleSixes);
    const median = myMedian(doubleSixes);


    const meanPrint = document.querySelector('#double-d6-rolls-mean')
    meanPrint.innerText = mean;
    const medianPrint = document.querySelector('#double-d6-rolls-median');
    medianPrint.innerText = median;



    const rollSrc1 = mySixSidedImage(roll1);
    const rollImage1 = document.querySelector('#double-d6-roll-1');

    const rollSrc2 = mySixSidedImage(roll2);
    const rollImage2 = document.querySelector('#double-d6-roll-2');
    
    rollImage1.src = rollSrc1;
    rollImage2.src = rollSrc2;


}


function rollD12(){

    const random = Math.random();
    const input = random * 6;
    const rolls = Math.ceil(input);
    sixes.push(rolls);


    const mean = myMean(sixes);
    const median = myMedian(sixes);

    
    const meanPrint = document.querySelector('#d12-rolls-mean')
    meanPrint.innerText = mean;
    const medianPrint = document.querySelector('#d12-rolls-median');
    medianPrint.innerText = median;


    
    const rollSrc = mySixSidedImage(rolls);
    const rollImage = document.querySelector('#d12-roll');
    rollImage.src = rollSrc;

}

function rollD20(){

    const random = Math.random();
    const input = random * 6;
    const rolls = Math.ceil(input);
    sixes.push(rolls);


    const mean = myMean(sixes);
    const median = myMedian(sixes);

    
    const meanPrint = document.querySelector('#d20-rolls-mean')
    meanPrint.innerText = mean;
    const medianPrint = document.querySelector('#d20-rolls-median');
    medianPrint.innerText = median;


    
    const rollSrc = mySixSidedImage(rolls);
    const rollImage = document.querySelector('#d20-roll');
    rollImage.src = rollSrc;

}

function resetAllRolls() {
    sixes.splice(0);
    

    setStartingImages();
}




/*
# ========================================================
# = Math Functions
# ========================================================
*/


function myMean(avg) {
    let sum = 0;

    for (let i = 0; i < avg.length; i++) {
        sum = sum + avg[i];
    }


    const mean = (sum / avg.length);


    return mean;
}



function getRandomNumber() {
    const random = Math.random();
    const input = random * 6;
    const result = Math.ceil(input);

    return result; 
}



function myMedian(value) {
    const ordered = value.sort();
    const midPoint = Math.floor(ordered.length / 2);

    return ordered[midPoint];
}



function mySixSidedImage(rolls) {
    return `/images/d6/${rolls}.png`;
}


function NumberImage(rolls) {
    return `/images/numbers/${rolls}.png`;
}



/*
# ========================================================
# = Helper Functions - Stretch Goals!
# ========================================================
*/

