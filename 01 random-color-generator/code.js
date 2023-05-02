const colors = ["#f00", "#0f0", "#00f"];
const btn = document.getElementById("btn");
const colorBox = document.querySelector(".color-box");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  colorBox.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
