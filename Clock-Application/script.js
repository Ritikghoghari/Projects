const timer = document.getElementById("Time");
const button = document.getElementById("btn");

function showTime() {
  const currenTime = new Date();
  const time = `${currenTime.getHours()} : ${currenTime.getMinutes()} : ${currenTime.getSeconds()}`;
  timer.innerHTML = time;
}

let interval = setInterval(showTime, 1000);

button.addEventListener("click", () => {
  clearInterval(interval);

  setInterval(() => {
    alert("10 Second Done Now Time Started again");
    interval = setInterval(showTime, 1000);
  }, 10000);
});
