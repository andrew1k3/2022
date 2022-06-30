
const input = document.getElementById('varInput');
var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minutesEl = document.getElementById('minutes');
var secondsEl = document.getElementById('seconds');


function test() {
    var utc = Date.now();
    var target = input;
    var diff = target.valueAsNumber - utc;

    document.getElementById('title').innerHTML = document.getElementById('varTitle').value;
    
    daysEl.innerHTML = Math.floor(diff/1000/60/60/24) + "days ";
    hoursEl.innerHTML = Math.floor(diff/1000/60/60) % 24 + "hrs ";
    minutesEl.innerHTML = Math.floor(diff/1000/60) % 60 + "mins ";
    secondsEl.innerHTML = Math.floor((diff / 1000) % 1000 % 60) + "secs ";

    if (diff<0) {
        document.getElementById('title').style.color = '#d63636';
    }
    else {
        document.getElementById('title').style.color = '#000000';
    }

}

document.getElementById('varTitle').addEventListener('input', test);

setInterval(test, 1000);