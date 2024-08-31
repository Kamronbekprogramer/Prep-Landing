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



document.getElementById('backButton').addEventListener('click', function() {
  let container = document.getElementById('scrollContainer');
  container.scrollBy({
    left: -container.clientWidth,
    behavior: 'smooth'
  });
});

document.getElementById('nextButton').addEventListener('click', function() {
  let container = document.getElementById('scrollContainer');
  container.scrollBy({
    left: container.clientWidth,
    behavior: 'smooth'
  });
});
