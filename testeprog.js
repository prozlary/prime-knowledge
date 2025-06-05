const questions = [
  {
    question: "O que é um algoritmo?",
    answers: {
      a: "Um programa de computador",
      b: "Uma linguagem de programação",
      c: "Uma sequência de passos para resolver um problema",
      d: "Um tipo de erro em código"
    },
    correct: "c"
  },
  {
    question: "Qual dessas estruturas representa uma decisão?",
    answers: {
      a: "Sequência",
      b: "Repetição",
      c: "Condicional (if)",
      d: "Comentário"
    },
    correct: "c"
  },
  {
    question: "O que significa a sigla 'IDE'?",
    answers: {
      a: "Identificador Digital Eletrônico",
      b: "Interface de Desenvolvimento Estático",
      c: "Ambiente Integrado de Desenvolvimento",
      d: "Início de Desenvolvimento de Execução"
    },
    correct: "c"
  },
  {
    question: "Qual é o valor da variável x após o código: x = 2 + 3 * 4?",
    answers: {
      a: "20",
      b: "14",
      c: "24",
      d: "12"
    },
    correct: "b"
  },
  {
    question: "Qual é a função da estrutura de repetição 'while'?",
    answers: {
      a: "Executar uma ação uma vez",
      b: "Executar um código enquanto uma condição for verdadeira",
      c: "Repetir infinitamente",
      d: "Executar em paralelo"
    },
    correct: "b"
  },
  {
    question: "Em lógica de programação, o que é um laço?",
    answers: {
      a: "Um tipo de erro",
      b: "Um tipo de variável",
      c: "Uma repetição de comandos",
      d: "Uma função matemática"
    },
    correct: "c"
  },
  {
    question: "O que o comando 'print' faz na maioria das linguagens?",
    answers: {
      a: "Compara valores",
      b: "Lê dados do teclado",
      c: "Exibe uma informação na tela",
      d: "Finaliza o programa"
    },
    correct: "c"
  },
  {
    question: "O que significa 'variável' em programação?",
    answers: {
      a: "Um valor fixo",
      b: "Um nome reservado",
      c: "Um tipo de dado",
      d: "Espaço para armazenar dados que podem mudar"
    },
    correct: "d"
  },
  {
    question: "Qual desses é um exemplo de linguagem de programação?",
    answers: {
      a: "HTML",
      b: "Python",
      c: "CSS",
      d: "Excel"
    },
    correct: "b"
  },
  {
    question: "O que acontece se uma condição em um 'if' for falsa?",
    answers: {
      a: "Nada acontece",
      b: "O bloco dentro do 'if' não é executado",
      c: "Sempre gera erro",
      d: "Executa o código duas vezes"
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
