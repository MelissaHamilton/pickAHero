


let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let currentRotation = Math.ceil(Math.random() * 1000);

btn.onclick = function() {
    currentRotation += Math.ceil(Math.random() * 1000); //increment the rotation by 360 degrees
    container.style.transform = "rotate(" + currentRotation + "deg)";
}

const triggers = {
    0: 'luffy',
    45: 'midoriya',
    90: 'vermillion',
    135: 'asta',
    180: 'tanjiro',
    225: 'zoro',
    270: 'naruto',
    315: 'naofumi'
};

function checkTrigger() {
    let containerRotation = container.style.transform.match(/\d+/);
    let matchingTrigger = null;
    if (containerRotation[0] >= 0 && containerRotation[0] <= 45) {
        matchingTrigger = 'luffy';
    } else if (containerRotation[0] > 45 && containerRotation[0] <= 90) {
        matchingTrigger = 'midoriya';
    } else if (containerRotation[0] > 90 && containerRotation[0] <= 135) {
        matchingTrigger = 'vermillion';
    } else if (containerRotation[0] > 135 && containerRotation[0] <= 180) {
        matchingTrigger = 'asta';
    } else if (containerRotation[0] > 180 && containerRotation[0] <= 225) {
        matchingTrigger = 'tanjiro';
    } else if (containerRotation[0] > 225 && containerRotation[0] <= 270) {
        matchingTrigger = 'zoro';
    } else if (containerRotation[0] > 270 && containerRotation[0] <= 315) {
        matchingTrigger = 'naruto';
    } else if (containerRotation[0] > 315 && containerRotation[0] <= 360) {
        matchingTrigger = 'naofumi';
    }
    if (matchingTrigger) {
        alert(`Triggered: ${matchingTrigger}`);
    }
}

