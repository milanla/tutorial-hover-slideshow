const slideshow = document.querySelector(".slideshow");
const images = document.querySelectorAll(".slideshow img");

slideshow.addEventListener("mousemove", function (event) {
  const x = event.offsetX;
  const width = this.offsetWidth;
  const percentage = x / width;
  const imageNumber = Math.floor(percentage * images.length);

  images.forEach(image => {
    image.style.zIndex = 0;
  });

  if (imageNumber >= 0 && imageNumber <= 5) {
    images[imageNumber].style.zIndex = 1;
  }
});
