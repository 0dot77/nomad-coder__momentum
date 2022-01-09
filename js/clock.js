const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // setInterval()은 1초마다 실행되기 때문에, 바로 시계를 보여주기 위해서는 함수를 먼저 실행해야한다.
setInterval(getClock, 1000);