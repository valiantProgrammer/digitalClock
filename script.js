/*
hour hand calculation
12 hour = 360deg
1 hour = 360/12deg
a hour = 30a deg

minute hand calculation
60 min = 360 deg
1 min = 6 deg
b min = 6b deg


second hand calculation
60 sec = 360 deg
1 sec = 6 deg
c sec = 6c deg
*/

let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

function displaytime(){
    let date = new Date();

    let aa = date.getHours();
    let bb = date.getMinutes();
    let cc = date.getSeconds();

    let hRotation = 30*aa + bb*(0.5);
    let mRotation = 6*bb;
    let sRotation = 6*cc;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displaytime, 1000);