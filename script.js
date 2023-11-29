let dropMenu = document.querySelector(".drop");
let menuDown = document.querySelector(".menuDown");
dropMenu.addEventListener("click", function () {
  menuDown.classList.toggle("active");
});
