const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var feedbackButton = document.querySelector(".btnAbout");
  var feedbackModal = document.getElementById("feedbackModal");
  var closeButton = document.querySelector(".close");

  feedbackButton.addEventListener("click", function () {
    feedbackModal.style.display = "block";
    event.preventDefault();
  });

  closeButton.addEventListener("click", function () {
    feedbackModal.style.display = "none";
  });
});
