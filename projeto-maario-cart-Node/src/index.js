// Definição do primeiro jogador com atributos específicos
const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4, // Determina a vantagem em blocos do tipo "RETA"
  MANOBRABILIDADE: 3, // Determina a vantagem em blocos do tipo "CURVA"
  PODER: 3, // Determina a força em blocos do tipo "CONFRONTO"
  PONTOS: 0, // Armazena os pontos acumulados na corrida
};

// Definição do segundo jogador com atributos específicos
const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

// Função assíncrona que simula o lançamento de um dado (1 a 6)
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Função para sortear o tipo de bloco: RETA, CURVA ou CONFRONTO
async function getRandomBlock() {
  let random = Math.random(); // Gera um número aleatório entre 0 e 1
  let result;

  // Define o tipo de bloco com base no número aleatório
  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }

  return result; // Retorna o tipo de bloco sorteado
}

// Função para exibir o resultado do lançamento do dado e o atributo usado
async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

// Motor principal que executa a lógica da corrida
async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) { // Loop por 5 rodadas
    console.log(`🏁 Rodada ${round}`);

    // Sorteia o tipo de bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // Rola os dados para cada personagem
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // Variáveis para armazenar o resultado total dos testes de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    // Determina a lógica com base no tipo de bloco
    if (block === "RETA") {
      // Bloco de velocidade
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }

    if (block === "CURVA") {
      // Bloco de manobrabilidade
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        "manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }

    if (block === "CONFRONTO") {
      // Bloco de confronto direto entre os personagens
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

      await logRollResult(
        character1.NOME,
        "poder",
        diceResult1,
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        "poder",
        diceResult2,
        character2.PODER
      );

      // Verifica o vencedor do confronto e ajusta os pontos
      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(
          `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`
        );
        character2.PONTOS--;
      }

      if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(
          `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`
        );
        character1.PONTOS--;
      }

      console.log(
        powerResult2 === powerResult1
          ? "Confronto empatado! Nenhum ponto foi perdido"
          : ""
      );
    }

    // Verifica quem marcou ponto na rodada
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    }

    console.log("-----------------------------");
  }
}

// Função para declarar o vencedor ao final da corrida
async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character2.PONTOS > character1.PONTOS)
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate");
}

// Função principal que inicia a corrida
(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
  );

  await playRaceEngine(player1, player2); // Executa o motor da corrida
  await declareWinner(player1, player2); // Declara o vencedor
})();
