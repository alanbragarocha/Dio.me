// Seleciona os elementos das teclas do piano, controle de volume e checkbox para exibir/esconder teclas
const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = []; // Armazena as teclas do piano que podem ser usadas
let audio = new Audio("src/tunes/a.wav"); // Instância do áudio usado para reproduzir os sons das teclas

// Função para tocar o som de uma tecla específica
const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`; // Define o caminho do som baseado na tecla pressionada
  audio.play(); // Reproduz o som

  // Adiciona a classe 'active' para indicar visualmente que a tecla foi pressionada
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");

  // Remove a classe 'active' após um curto intervalo de tempo (150ms)
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

// Adiciona eventos de clique a todas as teclas do piano
pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key)); // Chama a função playTune ao clicar
  mapedKeys.push(key.dataset.key); // Adiciona o atributo data-key ao array de teclas mapeadas
});

// Detecta pressionamentos de teclas no teclado físico
document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) {
    playTune(e.key); // Toca a tecla correspondente se ela estiver no array mapedKeys
  }
});

// Função para ajustar o volume do áudio
const handleVolume = (e) => {
  audio.volume = e.target.value; // Define o volume do áudio com base no valor do controle deslizante
};

// Função para exibir ou esconder as teclas do piano
const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide")); // Alterna a classe 'hide' para cada tecla
};

// Adiciona eventos ao controle de volume
volumeSlider.addEventListener("input", handleVolume);

// Adiciona evento ao checkbox para exibir/esconder teclas
keysCheck.addEventListener("click", showHideKeys);
