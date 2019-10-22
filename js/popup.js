var link = document.querySelector(".button-hotel-searching");
var popup = document.querySelector(".search-form");

var form = popup.querySelector("form");
var arrival = form.querySelector("[name=arrival]");
var departure = form.querySelector("[name=departure");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-close")) {
    popup.classList.remove("modal-close");
  } else {
    popup.classList.add("modal-close");
  }
  arrival.focus();
});


form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    popup.classList.add("modal-error")
  }
})
