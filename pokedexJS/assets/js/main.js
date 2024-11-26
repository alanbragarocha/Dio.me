const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`; // URL da API do Pokemon com os parâmetros offset e limit

// Faz uma requisição HTTP para o URL especificado
fetch(url).then(function(res){
 console.log(res);
})   


const x = 10 + 5;

console.log(x);