const startBtn = document.querySelector(".start-btn");

let started = false;

startBtn.addEventListener("click", () => {
  console.log("clicked");
  console.log("start", started);

  if (started) {
    startBtn.innerText = "START";
    started = false;
  } else {
    startBtn.innerText = "STOP";
    started = true;
  }
});
