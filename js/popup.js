var link = document.querySelector(".button-hotel-searching");
var popup = document.querySelector(".search-form");
popup.classList.add("modal-close");

var form = document.querySelector(".search-information");
var arrival = form.querySelector("[name=arrival]");
var departure = form.querySelector("[name=departure]");
var adult = form.querySelector("[name=adult]");
var children = form.querySelector("[name=children]");

var adultCount = "";
var childrenCount = "";

try {
  adultCount = localStorage.getItem("adult");
  childrenCount = localStorage.getItem("children");
} catch (e) {

}

adult.value = adultCount;
children.value = childrenCount;
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-close")) {
    popup.classList.remove("modal-close");
    popup.classList.add("modal-shown");
  } else {
    popup.classList.remove("modal-shown");
    popup.classList.add("modal-close");
  }
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!arrival.value || !departure.value) {
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("adult", adult.value);
    localStorage.setItem("children", children.value);
    form.submit();
  }
});
