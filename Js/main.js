function updateClock() {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = days[now.getDay()];

    document.querySelector("#day .value").textContent = day;
    document.querySelector("#hours .value").textContent = hours;
    document.querySelector("#minutes .value").textContent = minutes;
    document.querySelector("#seconds .value").textContent = seconds;
}

setInterval(updateClock, 1000);
updateClock();