// Array de emojis organizados em pares
const emojis = [
  "🐱", "🐱", "🦝", "🦝", "🦊", "🦊", "🐶", "🐶",
  "🐵", "🐵", "🦁", "🦁", "🐯", "🐯", "🐮", "🐮",
];

// Array para armazenar os cartões abertos
let openCards = [];

// Embaralha os emojis de forma aleatória
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Loop para criar os elementos do jogo na página
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div"); // Cria um elemento div
  box.className = "item"; // Adiciona a classe CSS 'item'
  box.innerHTML = shuffleEmojis[i]; // Adiciona o emoji correspondente ao div
  box.onclick = handleClick; // Adiciona o evento de clique que chama a função handleClick
  document.querySelector(".game").appendChild(box); // Adiciona o div ao contêiner do jogo
}

// Função chamada quando um cartão é clicado
function handleClick() {
  // Permite abrir no máximo dois cartões
  if (openCards.length < 2) {
    this.classList.add("boxOpen"); // Adiciona a classe para mostrar o cartão
    openCards.push(this); // Adiciona o cartão clicado ao array de cartões abertos
  }

  // Quando dois cartões estão abertos, verifica a correspondência
  if (openCards.length == 2) {
    setTimeout(checkMatch, 500); // Aguarda 500ms antes de verificar
  }

  // Exibe os cartões abertos no console (útil para depuração)
  console.log(openCards);
}

// Função para verificar se os cartões abertos são um par
function checkMatch() {
  // Verifica se os emojis dos dois cartões abertos são iguais
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    // Adiciona uma classe indicando que os cartões formam um par
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    // Se não forem iguais, remove a classe que os mantém abertos
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  // Limpa o array de cartões abertos para permitir novos cliques
  openCards = [];

  // Verifica se todos os pares foram encontrados
  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Você venceu !"); // Mostra uma mensagem de vitória
  }
}
