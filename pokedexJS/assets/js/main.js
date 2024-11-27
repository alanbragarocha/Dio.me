const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`; // URL da API do Pokemon com os parâmetros offset e limit

function convertPokemonToHTML(pokemon) {
    return `
        <li class="pokemon grass">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type grass">Grass</li>
                    <li class="type poison">Poison</li>
                </ol>
                <img src="./assets/images/Bulbasaur.png" alt="Imagem do ${pokemon.name}">
            </div>
        </li>
    `;
}

const pokemonOl = document.getElementById('pokemonList'); // Acessa a lista de pokémons no HTML

// Faz uma requisição HTTP para o URL especificado
fetch(url)
    .then(response => response.json()) // Converte a resposta em JSON
    .then(jsonBody => jsonBody.results) // Acessa a lista de resultados (pokémons)
    .then(pokemons => {
        console.log(pokemons); // Exibe a lista de pokémons no console

        pokemons.forEach(pokemon => {
            pokemonOl.innerHTML += convertPokemonToHTML(pokemon); // Converte o Pokémon em HTML e adiciona à lista
        });
    })
    .catch(error => {
        console.error('Erro na requisição:', error); // Tratamento de erros na requisição
    });
