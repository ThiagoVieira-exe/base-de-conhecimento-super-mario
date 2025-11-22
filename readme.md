# Super Mario World - Base de Conhecimento

## 📖 Sobre o Projeto

Este projeto é uma **Base de Conhecimento** interativa e de página única (Single-Page Application - SPA) dedicada ao universo de Super Mario. A aplicação permite aos usuários visualizar e pesquisar informações sobre diversos personagens da franquia, com uma interface temática e responsiva.

O projeto foi desenvolvido como parte da **Imersão Dev da Alura**, com o objetivo de praticar conceitos essenciais de desenvolvimento front-end, como manipulação do DOM, consumo de dados via `fetch` e responsividade.

---

## ✨ Funcionalidades

- **Carregamento Dinâmico:** Os dados dos personagens são carregados de um arquivo `JSON` local de forma assíncrona.
- **Busca em Tempo Real:** A filtragem dos personagens acontece instantaneamente enquanto o usuário digita no campo de busca.
- **Sugestão de Busca:** Caso o usuário cometa um erro de digitação, o sistema sugere o personagem com o nome mais parecido, utilizando o algoritmo de Distância de Levenshtein.
- **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, garantindo uma boa experiência em desktops, tablets e smartphones.
- **Layout Centralizado:** Ao encontrar um único resultado, o card do personagem é centralizado na tela para melhor visualização.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **HTML5:** Para a estrutura semântica da página.
- **CSS3:** Para estilização, animações e responsividade, utilizando Flexbox e Media Queries.
- **JavaScript (ES6+):** Para a lógica da aplicação, manipulação do DOM e consumo de dados com a `fetch` API.

---

## 📂 Estrutura do Projeto

```
base-de-conhecimento/
├── assets/
│   ├── css/
│   │   └── styles.css      # Arquivo de estilos principal
│   ├── data/
│   │   └── data.json       # Banco de dados com as informações dos personagens
│   ├── img/
│   │   └── bg.png          # Imagem de fundo
│   └── js/
│       └── script.js       # Arquivo com toda a lógica da aplicação
├── index.html              # Arquivo principal da página
└── readme.md               # Documentação do projeto
```

---

## 🏁 Como Executar

Como o projeto utiliza a `fetch` API para carregar dados locais, ele precisa ser executado a partir de um servidor local para funcionar corretamente.

1.  Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd base-de-conhecimento
    ```
3.  Abra o arquivo `index.html` em seu navegador. A maneira mais fácil de fazer isso com um servidor é usando a extensão **Live Server** no Visual Studio Code.

---

## ✍️ Autor

Desenvolvido por **Thiago Vieira**.

- LinkedIn
- GitHub
