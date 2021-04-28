var clockElement = document.body.getElementById('clock');

function clock() {
    clockElement.textContent = new Date().toLocaleTimeString();
}

setInterval(clock, 1000);