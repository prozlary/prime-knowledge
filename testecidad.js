const questions = [
  {
    question: "Qual é um dos direitos básicos garantidos pela Constituição Federal?",
    answers: {
      a: "Direito de acumular riqueza sem impostos",
      b: "Direito ao voto secreto e universal",
      c: "Direito de votar apenas aos 25 anos",
      d: "Direito de não cumprir leis civis"
    },
    correct: "b"
  },
  {
    question: "O que é convivência cidadã?",
    answers: {
      a: "Conviver apenas com quem pensa igual",
      b: "Impor opiniões sobre os outros",
      c: "Respeitar as diferenças e colaborar com a coletividade",
      d: "Evitar a participação em debates"
    },
    correct: "c"
  },
  {
    question: "Qual é um exemplo de atitude ética?",
    answers: {
      a: "Colar em provas para garantir boa nota",
      b: "Assumir um erro cometido",
      c: "Fingir que não viu um acidente",
      d: "Espalhar boatos sobre colegas"
    },
    correct: "b"
  },
  {
    question: "Cidadania é o direito de:",
    answers: {
      a: "Votar, ter acesso à educação e saúde, e participar da sociedade",
      b: "Ser rico",
      c: "Ignorar as leis",
      d: "Fazer justiça com as próprias mãos"
    },
    correct: "a"
  },
  {
    question: "Qual é a importância da ética na escola?",
    answers: {
      a: "Faz os alunos obedecerem sem pensar",
      b: "Ajuda a evitar amizades",
      c: "Promove respeito, justiça e responsabilidade",
      d: "Permite competir sem regras"
    },
    correct: "c"
  },
  {
    question: "Um cidadão ético:",
    answers: {
      a: "Faz o que é certo apenas quando é observado",
      b: "Busca sempre tirar vantagem",
      c: "Age corretamente, mesmo sem supervisão",
      d: "Só respeita quem é igual"
    },
    correct: "c"
  },
  {
    question: "Participar de campanhas sociais é um ato de:",
    answers: {
      a: "Vaidade pessoal",
      b: "Obediência à escola",
      c: "Cidadania ativa",
      d: "Rebeldia"
    },
    correct: "c"
  },
  {
    question: "A Constituição garante o direito à liberdade de expressão, desde que:",
    answers: {
      a: "Não fira os direitos dos outros",
      b: "Ofenda autoridades",
      c: "Espalhe fake news",
      d: "Apoie a violência"
    },
    correct: "a"
  },
  {
    question: "Quando respeitamos regras de trânsito, estamos exercendo:",
    answers: {
      a: "Direito à rebeldia",
      b: "Desobediência civil",
      c: "Cidadania responsável",
      d: "Autoritarismo"
    },
    correct: "c"
  },
  {
    question: "Qual dessas atitudes promove a boa convivência?",
    answers: {
      a: "Fazer piadas ofensivas",
      b: "Ignorar colegas diferentes",
      c: "Ouvir, dialogar e respeitar",
      d: "Impor opiniões aos outros"
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
