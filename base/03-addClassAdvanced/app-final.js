const cursor = document.querySelector(".cursor");

window.onmousemove = (event) => {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
};

const hiddenItem = document.querySelector(".hidden-item");

hiddenItem.addEventListener("click", () => {
  hiddenItem.style.top = "0";
  hiddenItem.style.left = "0";
  hiddenItem.style.width = "100vw";
  hiddenItem.style.height = "100vh";
  hiddenItem.style.borderRadius = "0";
  hiddenItem.style.background = "#23a6ec";
  hiddenItem.style.zIndex = "-1";
  cursor.style.display = "none";
});
