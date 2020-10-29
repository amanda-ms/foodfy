const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const titleModal = document.querySelector(".title-modal");
const autorModal = document.querySelector(".autor-modal");

for (let card of cards) {
  card.addEventListener("click", function () {
    const imagemId = card.getAttribute("id");
    const title = card.getAttribute("data-title");
    const autor = card.getAttribute("data-autor");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector("img").src = `assets/${imagemId}`;
    titleModal.innerText = title;
    autorModal.innerText = autor;
  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});
