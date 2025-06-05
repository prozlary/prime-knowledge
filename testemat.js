const questions = [
  {
    question: "Quanto é 7 × 8?",
    answers: { a: "54", b: "56", c: "64", d: "58" },
    correct: "b"
  },
  {
    question: "Qual a fração equivalente a 1/2?",
    answers: { a: "2/4", b: "3/5", c: "4/6", d: "5/8" },
    correct: "a"
  },
  {
    question: "Quantos lados tem um hexágono?",
    answers: { a: "5", b: "6", c: "7", d: "8" },
    correct: "b"
  },
  {
    question: "Quanto é 3/4 de 20?",
    answers: { a: "12", b: "15", c: "10", d: "13" },
    correct: "b"
  },
  {
    question: "Quanto é 9 × 6?",
    answers: { a: "54", b: "64", c: "56", d: "48" },
    correct: "a"
  },
  {
    question: "Qual é a área de um quadrado com lado 5?",
    answers: { a: "10", b: "15", c: "20", d: "25" },
    correct: "d"
  },
  {
    question: "Qual é o resultado de 1/3 + 1/6?",
    answers: { a: "1/2", b: "2/3", c: "3/6", d: "1/4" },
    correct: "a"
  },
  {
    question: "Quanto é 12 × 12?",
    answers: { a: "124", b: "132", c: "144", d: "154" },
    correct: "c"
  },
  {
    question: "Qual é a soma dos ângulos internos de um triângulo?",
    answers: { a: "90°", b: "180°", c: "360°", d: "270°" },
    correct: "b"
  },
  {
    question: "Quanto é 5/10 simplificado?",
    answers: { a: "1/5", b: "1/2", c: "2/5", d: "5/2" },
    correct: "b"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const answerButtons = document.getElementById("answer-buttons");
  answerButtons.innerHTML = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("next-btn").style.display = "none";

  for (let key in q.answers) {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.dataset.key = key;
    btn.innerText = `${key.toUpperCase()}: ${q.answers[key]}`;
    btn.onclick = () => selectAnswer(btn, key);
    answerButtons.appendChild(btn);
  }
}

function selectAnswer(button, selected) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach(btn => btn.disabled = true);

  if (selected === q.correct) {
    button.classList.add("correct");
    document.getElementById("feedback").innerText = "✅ Resposta correta!";
    score++;
  } else {
    button.classList.add("incorrect");
    document.getElementById("feedback").innerText = `❌ Resposta errada! Correto: ${q.correct.toUpperCase()}: ${q.answers[q.correct]}`;
    buttons.forEach(btn => {
      if (btn.dataset.key === q.correct) {
        btn.classList.add("correct");
      }
    });
  }

  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `
      <h2>Você acertou ${score} de ${questions.length} questões!</h2>
      <button onclick="location.reload()">Recomeçar</button>
    `;
  }
}

loadQuestion();
