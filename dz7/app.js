document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelectorAll(".toggle-answer");

  toggleButton.forEach((button) => {
    button.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      answer.classList.toggle("hidden");
      this.classList.toggle("green");
      this.classList.toggle("red");
      this.textContent = answer.classList.contains("hidden")
        ? "Показать ответ"
        : "Скрыть ответ";
    });
  });
});
