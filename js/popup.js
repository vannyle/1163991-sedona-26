var link = document.querySelector(".button-hotel-searching");
var popup = document.querySelector(".search-form");
  popup.classList.add("modal-close");

var form = document.querySelector(".search-information");
var arrival = form.querySelector("[name=arrival]");
var departure = form.querySelector("[name=departure]");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-close")) {
    popup.classList.add("modal-shown");
    setTimeout(function () {
      arrival.focus();
    }, 500);
  } else {
    popup.classList.remove("modal-shown")
    popup.classList.add("modal-close");
  }
});



form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  }
});
