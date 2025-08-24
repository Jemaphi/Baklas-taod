const modal = document.getElementById("imgModal");
const img = document.getElementById("mainImage");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
