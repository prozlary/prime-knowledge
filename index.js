document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".course-card button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Mais detalhes do curso em breve!");
    });
  });
});