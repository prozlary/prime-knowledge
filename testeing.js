const questions = [
  {
    question: "Como se diz 'olá' em inglês?",
    answers: {
      a: "Bye",
      b: "Hello",
      c: "Thanks",
      d: "Please"
    },
    correct: "b"
  },
  {
    question: "Qual dessas palavras significa 'livro'?",
    answers: {
      a: "Book",
      b: "Pen",
      c: "Chair",
      d: "Phone"
    },
    correct: "a"
  },
  {
    question: "What’s your name? É usado para:",
    answers: {
      a: "Perguntar a idade",
      b: "Perguntar onde mora",
      c: "Perguntar o nome",
      d: "Despedir-se"
    },
    correct: "c"
  },
  {
    question: "Traduza: 'Good morning'",
    answers: {
      a: "Boa tarde",
      b: "Boa noite",
      c: "Bom dia",
      d: "Boa viagem"
    },
    correct: "c"
  },
  {
    question: "Qual dessas é uma saudação de despedida?",
    answers: {
      a: "Goodbye",
      b: "Hello",
      c: "Thanks",
      d: "Nice to meet you"
    },
    correct: "a"
  },
  {
    question: "Traduza: 'Thank you'",
    answers: {
      a: "Por favor",
      b: "De nada",
      c: "Com licença",
      d: "Obrigado(a)"
    },
    correct: "d"
  },
  {
    question: "Qual é o significado de 'I am happy'?",
    answers: {
      a: "Eu estou feliz",
      b: "Eu estou cansado",
      c: "Eu estou com fome",
      d: "Eu sou alto"
    },
    correct: "a"
  },
  {
    question: "O que significa 'please'?",
    answers: {
      a: "Obrigado",
      b: "Desculpa",
      c: "Por favor",
      d: "Oi"
    },
    correct: "c"
  },
  {
    question: "Como se diz 'cadeira' em inglês?",
    answers: {
      a: "Table",
      b: "Chair",
      c: "Book",
      d: "Bag"
    },
    correct: "b"
  },
  {
    question: "Qual é a resposta comum para 'How are you?'",
    answers: {
      a: "My name is...",
      b: "Goodbye!",
      c: "I’m fine, thank you!",
      d: "I am a teacher"
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
