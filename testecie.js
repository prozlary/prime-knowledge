const questions = [
  {
    question: "Qual é a principal função do coração humano?",
    answers: {
      a: "Filtrar o sangue",
      b: "Bombear o sangue",
      c: "Produzir oxigênio",
      d: "Digestionar alimentos"
    },
    correct: "b"
  },
  {
    question: "O que forma um ecossistema?",
    answers: {
      a: "Somente animais",
      b: "Somente plantas",
      c: "Organismos vivos e ambiente",
      d: "Água e solo apenas"
    },
    correct: "c"
  },
  {
    question: "Qual órgão é responsável pela digestão dos alimentos?",
    answers: {
      a: "Pulmão",
      b: "Fígado",
      c: "Estômago",
      d: "Coração"
    },
    correct: "c"
  },
  {
    question: "O que é uma fonte renovável de energia?",
    answers: {
      a: "Carvão",
      b: "Petróleo",
      c: "Energia solar",
      d: "Gás natural"
    },
    correct: "c"
  },
  {
    question: "Qual parte do corpo controla todas as funções do organismo?",
    answers: {
      a: "Pulmão",
      b: "Estômago",
      c: "Cérebro",
      d: "Rim"
    },
    correct: "c"
  },
  {
    question: "O que acontece com a energia em um ecossistema?",
    answers: {
      a: "Se perde completamente",
      b: "Circula entre seres vivos",
      c: "É criada pelos animais",
      d: "Não é usada"
    },
    correct: "b"
  },
  {
    question: "Qual sistema do corpo humano é responsável pela respiração?",
    answers: {
      a: "Digestivo",
      b: "Respiratório",
      c: "Circulatório",
      d: "Nervoso"
    },
    correct: "b"
  },
  {
    question: "Qual destas é uma fonte de energia limpa?",
    answers: {
      a: "Energia eólica",
      b: "Gasolina",
      c: "Carvão mineral",
      d: "Diesel"
    },
    correct: "a"
  },
  {
    question: "O que são produtores em um ecossistema?",
    answers: {
      a: "Animais carnívoros",
      b: "Plantas que fazem fotossíntese",
      c: "Bactérias",
      d: "Insetos decompositores"
    },
    correct: "b"
  },
  {
    question: "Qual é o principal gás absorvido pelos pulmões?",
    answers: {
      a: "Dióxido de carbono",
      b: "Oxigênio",
      c: "Nitrogênio",
      d: "Gás metano"
    },
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
