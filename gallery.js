// for gallery but didnt work
const imageContainer = document.getElementById("image-container");
const image = document.querySelector("#image-container img");
const closeBtn = document.getElementById("close-btngallery");

image.addEventListener("click", () => {
  imageContainer.classList.add("expanded");
});

closeBtn.addEventListener("click", () => {
  imageContainer.classList.remove("expanded");
});

imageContainer.addEventListener("click", (event) => {
  if (imageContainer.classList.contains("expanded") && event.target === imageContainer) {
    imageContainer.classList.remove("expanded");
  }
});

document.addEventListener("keydown", (event) => {
  if (imageContainer.classList.contains("expanded") && event.key === "Escape") {
    imageContainer.classList.remove("expanded");
  }
});