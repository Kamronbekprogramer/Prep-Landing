document.getElementById("menu-button").addEventListener("click", function () {
  document.getElementById("menu-modal").classList.remove("hidden");
  document.getElementById("menu-modal").classList.add("show");
});

document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("menu-modal").classList.remove("show");
  setTimeout(() => {
    document.getElementById("menu-modal").classList.add("hidden");
  }, 300);
});

const scrollContainer = document.getElementById("scrollContainer");
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

nextButton.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
});

backButton.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -260, behavior: "smooth" });
});

document.getElementById("backButton").addEventListener("click", function () {
  let container = document.getElementById("scrollContainer");
  container.scrollBy({
    left: -container.clientWidth,
    behavior: "smooth",
  });
});

document.getElementById("nextButton").addEventListener("click", function () {
  let container = document.getElementById("scrollContainer");
  container.scrollBy({
    left: container.clientWidth,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  Inputmask({
    mask: "+\\9\\9\\8 99 999-99-99",
    placeholder: "_",
    showMaskOnHover: false,
  }).mask(document.getElementById("phone"));
});

const slider = new Swiper(".swiper", {
  loop: true,
  speed: 500,

  pagination: {},

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  slidesPerView: 3,
  grid: {
    col: 3,
  },
  mousewheel: {
    forceToAxis: true,
  },
});
function startCountdown() {
  let timeLeft = 180;

  const countdownElement = document.getElementById("countdown");

  const countdownTimer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    countdownElement.textContent = `${minutes}:${formattedSeconds}`;

    if (timeLeft <= 0) {
      timeLeft = 180; 
    }

    timeLeft--;
  }, 1000);
}

startCountdown();



