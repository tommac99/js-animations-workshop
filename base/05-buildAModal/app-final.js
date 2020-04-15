const openBtn = document.querySelector(".open-btn");
const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalContainer.style.display = "none";
});

modalContainer.addEventListener("click", () => {
  modal.style.display = "none";
  modalContainer.style.display = "none";
});
