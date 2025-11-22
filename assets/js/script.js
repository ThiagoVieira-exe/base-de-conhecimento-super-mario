let cardContainer = document.querySelector(".card-container");
let mainElement = document.querySelector("main"); // Seleciona o elemento <main>
let campoBusca = document.querySelector(
  'input[placeholder="Digite o nome de um personagem..."]'
);
let dados = [];

async function carregarPersonagens() {
  const resposta = await fetch("assets/data/data.json");
  dados = await resposta.json();
  renderizarCards(dados);
}

function iniciarBusca() {
  // Obtém o termo da busca em letras minúsculas para uma comparação sem distinção de maiúsculas/minúsculas
  const termoBusca = campoBusca.value.toLowerCase();

  // Se o campo de busca estiver vazio, mostra todos os personagens
  if (termoBusca.trim() === "") {
    renderizarCards(dados);
    return;
  }

  // Filtra os dados com base no termo de busca apenas no nome
  const resultados = dados.filter((dado) =>
    dado.nome.toLowerCase().includes(termoBusca)
  );

  // Se não houver resultados, tenta encontrar uma sugestão
  if (resultados.length === 0) {
    encontrarSugestao(termoBusca);
  } else {
    renderizarCards(resultados);
  }
}

function encontrarSugestao(termoBusca) {
  let melhorSugestao = null;
  let menorDistancia = Infinity;

  // Itera sobre todos os personagens para encontrar o mais próximo
  for (const personagem of dados) {
    const distancia = levenshteinDistance(
      termoBusca,
      personagem.nome.toLowerCase()
    );

    if (distancia < menorDistancia) {
      menorDistancia = distancia;
      melhorSugestao = personagem;
    }
  }

  // Limpa o container e mostra a sugestão se a distância for pequena (ou seja, se for um erro de digitação provável)
  cardContainer.innerHTML = "";
  if (melhorSugestao && menorDistancia <= 3) {
    const sugestaoElemento = document.createElement("div");
    sugestaoElemento.classList.add("sugestao-busca");
    sugestaoElemento.innerHTML = `
      <p>Nenhum resultado encontrado. Você quis dizer:</p>
      <button onclick="renderizarCards([dados.find(p => p.nome === '${melhorSugestao.nome}')])">${melhorSugestao.nome}</button>
    `;
    cardContainer.appendChild(sugestaoElemento);
  } else {
    // Se não houver sugestão próxima, informa que nada foi encontrado
    cardContainer.innerHTML = `<p class="sugestao-busca">Nenhum personagem encontrado.</p>`;
  }
}

function renderizarCards(dados) {
  // Adiciona ou remove a classe para centralizar o card
  if (dados.length === 1) {
    mainElement.classList.add("busca-ativa");
  } else {
    mainElement.classList.remove("busca-ativa");
  }

  // Limpa o container de cards antes de renderizar os novos resultados
  cardContainer.innerHTML = "";
  for (let dado of dados) {
    let article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `
      <img src="${dado.imagem}" alt="Imagem de ${dado.nome}" class="card-image">
      <div class="card-info">
        <h2>${dado.nome}</h2>
        <p>${dado.descricao}</p>
        <p>Primeira aparição: ${dado.primeira_aparicao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
      </div>
    `;
    cardContainer.appendChild(article);
  }
}

// Função para calcular a distância de Levenshtein (mede a similaridade entre duas strings)
function levenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substituição
          matrix[i][j - 1] + 1, // inserção
          matrix[i - 1][j] + 1 // deleção
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Carrega todos os personagens quando a página é iniciada
carregarPersonagens();

// Adiciona os "ouvintes de evento" para a busca
campoBusca.addEventListener("input", iniciarBusca); // Aciona a busca ao digitar
