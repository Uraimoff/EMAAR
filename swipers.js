// Find the swiper-container element
const swiperContainer = document.querySelector('.swiper-container');

// Initialize the Swiper component
const swiper = new Swiper(swiperContainer, {
  // Add your options here
  loop: true,
  autoplay: {
    delay: 2000
  },
  // Add more options as needed
});