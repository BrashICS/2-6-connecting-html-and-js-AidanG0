/**
 * 2.6 - Connecting HTML to JavaScript!
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/

document.getElementById("d6").addEventListener("click", roll_d6)
document.getElementById("d8").addEventListener("click", roll_d8)
document.getElementById("d20").addEventListener("click", roll_d20)

/*** Functions ***/

// Return a random integer from `min` to `max`, inclusive


function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**d6 */
function  roll_d6() {
    let roll = randInt(1, 6);
    document.getElementById("die_roll").textContent = roll
}


/**d8 */
function  roll_d8() {
    let roll = randInt(1, 8);
    document.getElementById("die_roll").textContent = roll
}

/**d20 */
function  roll_d20() {
    let roll = randInt(1, 20);
    document.getElementById("die_roll").textContent = roll
}



