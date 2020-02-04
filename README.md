# Markdown Links

O projeto MD Links é uma biblioteca que lê arquivos e links no formato Markdown.



##  Instalação:

A instalação da biblioteca é feita através do NodeJs, a partir do comando no terminal:

`npm install https://github.com/renata-msecco/SAP003-md-links`

# Utilização:


## Java Script

Exemplo abaixo demonstra como utiliza a biblioteca em JS:

`const mdLinks = require(".caminho-da-pasta-de-instalação/lib/index.js");

mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })  
  .catch(console.error);` 

## CLI

O executável desta aplicação deve poder ser executado da seguinte maneira,através do terminal:

`md-links <path-to-file>` 

`$ md-links ./some example.md`

##  Código:

Por se tratar de um projeto Back-end apresento abaixo um trecho de código do projeto.

![Mdlinks](/image/Mdlinks.jpg)

