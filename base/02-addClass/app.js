const startBtn = document.querySelector(".start-btn");
// Select DOM elements HINT: 2 of them.

let started = false;

startBtn.addEventListener("click", () => {
  console.log("clicked");
  console.log("started", started);
  // Log light element and log all of its classes

  if (started) {
    startBtn.innerText = "START";
    // Remove 'active' class from light element

    // Todo - Add text inside the light (ON | OFF)
  } else {
    startBtn.innerText = "STOP";
    // Add 'active' class to light element

    // Todo - Add text inside the light (ON | OFF)
  }

  // Refactor toggle started
  started = !started;
});

// BONUS -> Add not-active class
