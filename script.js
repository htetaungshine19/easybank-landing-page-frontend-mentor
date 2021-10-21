const hunburger = document.querySelector(".hunburger");
const ul = document.querySelector(".ul");
hunburger.addEventListener("click", function () {
  if (ul.style.display == "" || ul.style.display == "none") {
    ul.style.display = "flex";
    hunburger.src = "./images/icon-close.svg";
  } else {
    ul.style.display = "none";
    hunburger.src = "./images/icon-hamburger.svg";
  }
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 860) {
    ul.style.display = "";
  }
});
