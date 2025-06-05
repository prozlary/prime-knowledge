const questions = [
  {
    question: "Quanto é 7 × 8?",
    answers: {
      a: "56",
      b: "48",
      c: "54",
      d: "64"
    },
    correct: "a"
  },
  {
    question: "Qual é a forma correta: 'tráz' ou 'traz'?",
    answers: {
      a: "Tráz",
      b: "Traz",
      c: "Traz-se",
      d: "Trá-se"
    },
    correct: "b"
  },
  {
    question: "Qual órgão bombeia sangue pelo corpo?",
    answers: {
      a: "Pulmão",
      b: "Cérebro",
      c: "Fígado",
      d: "Coração"
    },
    correct: "d"
  },
  {
    question: "O que representa um algoritmo?",
    answers: {
      a: "Um tipo de linguagem",
      b: "Uma sequência lógica de passos",
      c: "Um erro de programação",
      d: "Um número aleatório"
    },
    correct: "b"
  },
  {
    question: "Direito básico garantido pela constituição:",
    answers: {
      a: "Direito à fama",
      b: "Direito ao voto",
      c: "Direito ao luxo",
      d: "Direito à sorte"
    },
    correct: "b"
  },
  {
    question: "Como se diz 'obrigado' em inglês?",
    answers: {
      a: "Please",
      b: "Thanks",
      c: "Hi",
      d: "Bye"
    },
    correct: "b"
  },
  {
    question: "Qual dessas é uma fração equivalente a 1/2?",
    answers: {
      a: "2/4",
      b: "3/4",
      c: "4/5",
      d: "1/4"
    },
    correct: "a"
  },
  {
    question: "Qual frase está corretamente pontuada?",
    answers: {
      a: "Hoje eu fui ao mercado e comprei pão leite e café.",
      b: "Hoje, eu fui ao mercado, e comprei pão, leite e café.",
      c: "Hoje eu fui ao mercado e, comprei pão leite e café.",
      d: "Hoje, eu fui ao mercado e comprei pão, leite e café."
    },
    correct: "d"
  },
  {
    question: "Qual é uma fonte de energia renovável?",
    answers: {
      a: "Carvão",
      b: "Petróleo",
      c: "Energia solar",
      d: "Gás natural"
    },
    correct: "c"
  },
  {
    question: "Qual é a tradução correta de 'Good morning'?",
    answers: {
      a: "Boa tarde",
      b: "Boa noite",
      c: "Bom dia",
      d: "Até logo"
    },
    correct: "c"
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
    document.getElementById("feedback").innerText = `❌ Errado! Resposta certa: ${q.correct.toUpperCase()}: ${q.answers[q.correct]}`;
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
    showResult();
  }
}

function showResult() {
  const quizBox = document.getElementById("quiz-box");
  quizBox.innerHTML = `
    <h2>🎉 Você acertou ${score} de ${questions.length} questões!</h2>
    <p>Obrigado por participar do simulado!</p>
    <button onclick="location.reload()">🔁 Recomeçar</button>
  `;
}

loadQuestion();
