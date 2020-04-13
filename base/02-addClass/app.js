const light = document.querySelector(".light");
const startBtn = document.querySelector(".start-btn");

let started = false;

startBtn.addEventListener("click", () => {
  console.log("clicked");
  console.log("started", started);
  console.log("light", light.classList);

  if (started) {
    startBtn.innerText = "START";
    light.classList.remove("active");
    // Todo - Add text inside the light (ON | OFF)
    light.innerText = "OFF";
  } else {
    startBtn.innerText = "STOP";
    light.classList.add("active");
    // Todo - Add text inside the light (ON | OFF)
    light.innerText = "ON";
  }

  // Refactor toggle started
  started = !started;
});
