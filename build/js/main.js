const link = document.querySelector(".user-block .login");
const popup = document.querySelector(".modal-content");
const popupClose = document.querySelector(".modal-content-close");
const mapLink =  document.querySelector(".js-address-map");
const map = document.querySelector(".modal-content-map");
const overlay = document.querySelector(".modal-overlay");
const mapClose = document.querySelector(".modal-content-map .modal-content-close");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
})

popupClose.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
})

mapLink.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.classList.add("modal-content-show");
  map.classList.add("modal-content-show");
})

mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.classList.remove("modal-content-show");
  map.classList.remove("modal-content-show");
})


