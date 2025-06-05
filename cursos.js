document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".course-card button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const courseTitle = button.closest(".course-card").querySelector("h3").textContent;
      alert('Mais detalhes sobre o curso: "${courseTitle}" em breve!');
    });
  });
});
