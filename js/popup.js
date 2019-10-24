var link = document.querySelector(".button-hotel-searching");
var popup = document.querySelector(".search-form");
  popup.classList.add("modal-close");

var form = document.querySelector(".search-information");
var arrival = form.querySelector("[name=arrival]");
var departure = form.querySelector("[name=departure]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

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
  popup.classList.add("modal-error");
  }
});
