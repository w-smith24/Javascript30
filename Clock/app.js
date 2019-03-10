const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalTime = document.querySelector('.digital-time');

function fixHandsFlicker(element, degrees) {
    if(degrees === 90) {
        element.style.transition = 'all 0.0s';
    }
}

function leadingZero(time) {
    return (time < 10 ? '0' : '') + time;
}

function setDigitalTime(hour, min, second) {
    if(hour > 12){
        digitalTime.innerHTML = `${hour - 12}:${leadingZero(min)}:${leadingZero(second)}`;
    }
    else {
        digitalTime.innerHTML = `${hour}:${leadingZero(min)}:${leadingZero(second)}`;
    }
}

function setDate() {
    const now = new Date();
    
    setDigitalTime(now.getHours(), now.getMinutes(), now.getSeconds());


    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; 
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


    fixHandsFlicker(secondHand, secondsDegrees);
    fixHandsFlicker(minHand, minsDegrees);
    fixHandsFlicker(hourHand, hoursDegrees);
}

setInterval(setDate, 1000);