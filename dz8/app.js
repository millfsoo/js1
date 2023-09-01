const square = document.getElementById("square");

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

square.addEventListener("click", function () {
  const randomColor = getRandomColor();
  square.style.backgroundColor = randomColor;
  square.textContent = randomColor;
  document.getElementById("text").style.display = "none";
});
