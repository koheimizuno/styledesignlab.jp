document
  .getElementsByClassName("category-header")[0]
  .addEventListener("click", () => {
    document.querySelector(".category-btn").classList.toggle("change");
    document.querySelector(".category ul").classList.toggle("change");
  });

new Swiper(".contents-swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  centeredSlides: true,
  spaceBetween: 30,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 100,
    },
  },
});

new Swiper(".works-swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  centeredSlides: false,
  spaceBetween: 30,
  slidesPerView: "auto",
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 100,
    },
  },
});

new Swiper(".topics-swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  centeredSlides: false,
  spaceBetween: 30,
  slidesPerView: "auto",
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 100,
    },
  },
});

document
  .getElementsByClassName("hamburger-btn")[0]
  .addEventListener("click", () => {
    document.querySelector(".hamburger-sec").style.transform = "translateX(0)";
  });

document
  .getElementsByClassName("close-btn")[0]
  .addEventListener("click", () => {
    document.querySelector(".hamburger-sec").style.transform =
      "translateX(100%)";
  });
