const content = document.querySelector(".content");
const slider = content.querySelector(".slider");

function slideContent(e) {
  content.classList.toggle("slide");
}

slider.addEventListener("click", slideContent);
