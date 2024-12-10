const audioPlayer = document.getElementById("audio-player");

// Adiciona um evento de clique para controlar o áudio de fundo
audioPlayer.addEventListener("click", () => {
  var bgm = document.getElementById("bgm");
  state.audio.backgroundAudio = !state.audio.backgroundAudio;

  if (state.audio.backgroundAudio) {
    // Adiciona classe ativa para indicar que o áudio está tocando
    audioPlayer.classList.add("active");
    audioPlayer.classList.remove("inactive");

    bgm.play(); // Inicia a reprodução do áudio de fundo
  } else {
    // Adiciona classe inativa para indicar que o áudio foi pausado
    audioPlayer.classList.add("inactive");
    audioPlayer.classList.remove("active");

    bgm.pause(); // Pausa o áudio de fundo
  }
});

// Estado global do jogo, centralizando informações importantes
const state = {
  audio: {
    backgroundAudio: false, // Controla o estado do áudio de fundo
  },
  score: {
    playerScore: 0, // Pontuação do jogador
    computerScore: 0, // Pontuação do computador
    scoreBox: document.getElementById("score_points"), // Elemento HTML para exibir a pontuação
  },
  cardSprites: {
    avatar: document.getElementById("card-image"),
    name: document.getElementById("card-name"),
    type: document.getElementById("card-type"),
  },
  playerSides: {
    player1: "player-cards",
    player1Box: document.querySelector("#player-cards"), // Área onde as cartas do jogador são exibidas
    player2: "computer-cards",
    player2Box: document.querySelector("#computer-cards"), // Área onde as cartas do computador são exibidas
  },
  fieldCards: {
    player: document.getElementById("player-field-card"), // Carta escolhida pelo jogador
    computer: document.getElementById("computer-field-card"), // Carta escolhida pelo computador
  },
  actions: {
    button: document.getElementById("next-duel"), // Botão para iniciar o próximo duelo
  },
};

// Caminho base para os ícones das cartas
const pathImages = "./src/assets/icons/";

// Dados das cartas disponíveis no jogo
const cardData = [
  {
    id: 0,
    name: "Blue Eyes White Dragon", // Nome da carta
    type: "Paper", // Tipo baseado no jogo Pedra, Papel e Tesoura
    img: `${pathImages}dragon2.png`, // Caminho da imagem da carta
    winOf: [1], // IDs das cartas que esta carta vence
    loseOf: [2], // IDs das cartas que esta carta perde
  },
  {
    id: 1,
    name: "Dark Magician",
    type: "Rock",
    img: `${pathImages}magician2.png`,
    winOf: [2],
    loseOf: [0],
  },
  {
    id: 2,
    name: "Exodia",
    type: "Scissors",
    img: `${pathImages}exodia2.png`,
    winOf: [0],
    loseOf: [1],
  },
];

// Inicializa o jogo
function init() {
  // Esconde os campos de batalha no início
  state.fieldCards.player.style.display = "none";
  state.fieldCards.computer.style.display = "none";

  // Sorteia cartas para ambos os jogadores
  drawCards(5, state.playerSides.player1);
  drawCards(5, state.playerSides.player2);
}

// Sorteia um número de cartas para um jogador
async function drawCards(cardsNumber, fieldSide) {
  for (let i = 0; i < cardsNumber; i++) {
    const randomCard = await getRandomCard(); // Sorteia uma carta aleatória
    const cardImage = await createCardImage(randomCard, fieldSide); // Cria a imagem da carta

    document.getElementById(fieldSide).appendChild(cardImage); // Adiciona a carta ao campo
  }
}

// Cria a imagem de uma carta e adiciona eventos, se necessário
async function createCardImage(card, fieldSide) {
  const cardImage = document.createElement("img");

  cardImage.setAttribute("height", "100px");
  cardImage.setAttribute("src", "./src/assets/icons/card-back.png"); // Mostra o verso da carta inicialmente
  cardImage.setAttribute("data-id", card.id); // Atribui o ID da carta
  cardImage.classList.add("card"); // Classe CSS para estilo

  if (fieldSide === state.playerSides.player1) {
    // Adiciona eventos apenas para as cartas do jogador
    cardImage.addEventListener("click", async () => {
      await setCardsField(cardImage.getAttribute("data-id"));
    });

    cardImage.addEventListener("mouseover", async () => {
      await drawSelectedCard(card.id); // Mostra os detalhes da carta ao passar o mouse
    });
  }

  return cardImage;
}

// Coloca as cartas selecionadas no campo de batalha
async function setCardsField(cardId) {
  await removeAllCardsImages(); // Remove as cartas antigas do campo
  const computerCard = await getRandomCard(); // Sorteia uma carta para o computador
  const playerCard = cardData[cardId]; // Recupera a carta selecionada pelo jogador

  // Exibe as cartas no campo de batalha
  state.fieldCards.player.style.display = "block";
  state.fieldCards.computer.style.display = "block";

  state.fieldCards.player.src = playerCard.img;
  state.fieldCards.computer.src = computerCard.img;

  const duelResult = await checkDuelResult(playerCard, computerCard); // Determina o resultado do duelo

  await updateScore(); // Atualiza a pontuação
  await drawButton(duelResult); // Mostra o botão com o resultado
}

// Reinicia o duelo
async function resetDuel() {
  state.cardSprites.name.innerText = "Selecione"; // Reseta o texto do nome
  state.cardSprites.type.innerText = "uma carta"; // Reseta o tipo
  state.cardSprites.avatar.src = ""; // Remove a imagem da carta selecionada

  state.actions.button.style.display = "none"; // Esconde o botão de próximo duelo
  state.fieldCards.player.style.display = "none"; // Esconde o campo do jogador
  state.fieldCards.computer.style.display = "none"; // Esconde o campo do computador

  init(); // Reinicia o jogo
}

// Atualiza a pontuação na interface
async function updateScore() {
  state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
}

// Exibe o botão com o resultado do duelo
async function drawButton(result) {
  state.actions.button.innerText = result.toUpperCase(); // Mostra o resultado (WIN/LOSE/DRAW)
  state.actions.button.style.display = "block"; // Exibe o botão
}

// Determina o resultado do duelo
async function checkDuelResult(playerCard, computerCard) {
  let duelResult = "draw";

  if (playerCard.winOf.includes(computerCard.id)) {
    duelResult = "win";
    state.score.playerScore++; // Incrementa a pontuação do jogador
  }

  if (playerCard.loseOf.includes(computerCard.id)) {
    duelResult = "lose";
    state.score.computerScore++; // Incrementa a pontuação do computador
  }

  await playAudio(duelResult); // Reproduz o som correspondente ao resultado
  return duelResult;
}

// Remove todas as imagens de cartas do campo
async function removeAllCardsImages() {
  let { player1Box, player2Box } = state.playerSides;

  // Remove imagens da área do jogador
  let imgElements = player1Box.querySelectorAll("img");
  imgElements.forEach((img) => img.remove());

  // Remove imagens da área do computador
  imgElements = player2Box.querySelectorAll("img");
  imgElements.forEach((img) => img.remove());
}

// Mostra os detalhes da carta selecionada
async function drawSelectedCard(cardId) {
  const selectedCard = cardData[cardId];

  state.cardSprites.avatar.src = selectedCard.img; // Mostra a imagem da carta
  state.cardSprites.name.innerText = selectedCard.name; // Mostra o nome da carta
  state.cardSprites.type.innerText = `Attribute: ${selectedCard.type}`; // Mostra o atributo
}

// Sorteia uma carta aleatória
async function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * cardData.length);
  return cardData[randomIndex];
}

// Reproduz o áudio baseado no resultado
async function playAudio(status) {
  const audio = new Audio(`./src/assets/audios/${status}.wav`);
  audio.play(); // Inicia o áudio
}

// Inicializa o jogo quando o arquivo é carregado
init();
