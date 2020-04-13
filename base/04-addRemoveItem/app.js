const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const itemsContainer = document.querySelector(".items-container");

let itemsArray = [];

addBtn.addEventListener("click", () => {
  const amount = itemsContainer.childNodes.length;

  if (amount < 12) {
    itemsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class='item'>Item</div>`
    );
  }
});

removeBtn.addEventListener("click", () => {
  const amount = itemsContainer.childNodes.length;

  if (amount > 0) {
    itemsContainer.removeChild(itemsContainer.childNodes[amount - 1]);
  }
});
