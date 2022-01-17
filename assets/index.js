const content = document.querySelector(".content");
const slider = content.querySelector(".slider");

function slideContent(e) {
  const [slideTime] = content.dataset.slide.split("s");
  console.log(slideTime);
  content.style = `--slide-time: ${slideTime}s`;
  content.classList.toggle("slide-open");
  // setTimeout(() => {
  //   content.classList.toggle("slide");
  // content.classList.toggle("content-open");
  // }, parseFloat(slideTime) * 1000);
}

slider.addEventListener("click", slideContent);
