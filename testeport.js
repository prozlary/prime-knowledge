const questions = [
  {
    question: "Qual a forma correta?",
    answers: {
      a: "Excessão",
      b: "Exeção",
      c: "Exceção",
      d: "Esceção"
    },
    correct: "c"
  },
  {
    question: "Qual é o tempo verbal da frase: 'Eu havia estudado'?",
    answers: {
      a: "Futuro do presente",
      b: "Pretérito mais-que-perfeito",
      c: "Pretérito perfeito",
      d: "Pretérito imperfeito"
    },
    correct: "b"
  },
  {
    question: "Onde deve haver uma vírgula?",
    answers: {
      a: "Gosto de pizza sorvete e hambúrguer.",
      b: "Gosto de pizza, sorvete e hambúrguer.",
      c: "Gosto, de pizza sorvete e hambúrguer.",
      d: "Gosto de pizza sorvete, e hambúrguer."
    },
    correct: "b"
  },
  {
    question: "Qual palavra está escrita corretamente?",
    answers: {
      a: "Concerto (no sentido de conserto)",
      b: "Concerteza",
      c: "Com certeza",
      d: "Comcerteza"
    },
    correct: "c"
  },
  {
    question: "Na frase: 'Se eu soubesse, teria ido.', o verbo está no:",
    answers: {
      a: "Pretérito imperfeito do subjuntivo",
      b: "Pretérito perfeito",
      c: "Futuro do pretérito",
      d: "Infinitivo"
    },
    correct: "a"
  },
  {
    question: "Qual das frases está pontuada corretamente?",
    answers: {
      a: "Maria chegou, e sentou.",
      b: "Maria chegou e, sentou.",
      c: "Maria chegou e sentou.",
      d: "Maria, chegou e sentou."
    },
    correct: "c"
  },
  {
    question: "Qual dessas formas verbais está incorreta?",
    answers: {
      a: "Fazem dois anos que viajei.",
      b: "Faz dois anos que viajei.",
      c: "Já faz tempo que não te vejo.",
      d: "Faz três meses que terminei o curso."
    },
    correct: "a"
  },
  {
    question: "Assinale a palavra escrita incorretamente:",
    answers: {
      a: "Exceção",
      b: "Pressão",
      c: "Intenção",
      d: "Previlégio"
    },
    correct: "d"
  },
  {
    question: "A pontuação correta da frase é:",
    answers: {
      a: "Ela disse que não, viria.",
      b: "Ela disse, que não viria.",
      c: "Ela disse que não viria.",
      d: "Ela, disse que não viria."
    },
    correct: "c"
  },
  {
    question: "Qual dessas frases está com verbo no infinitivo?",
    answers: {
      a: "Ele correu rápido.",
      b: "Vamos sair agora.",
      c: "Eles saem cedo.",
      d: "Saiu sem avisar."
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
