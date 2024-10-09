// Seletor de elemento por ID
function puxarElementoPorId(){
   const titulo = document.getElementById('meuTitulo');
   console.log(titulo);
   titulo.textContent = "Titulo alterado";
}

// Seletor de elemento por classe
function puxarElementoPorClasse(){
   const subtitulo = document.getElementsByClassName('subtitulo');
   console.log(subtitulo);
}

// Seletor de elemento por tag
function puxarElementoPorTag(){
   const paragrafos = document.getElementsByTagName('p');
   console.log(paragrafos);
}

// Função para criar a lista
function criarLista(){
   const container = document.getElementById('lista-container');
   container.innerHTML = 
   `
   <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
   </ul>
   `;
}

function removerButao(){
   const container = document.getElementById('lista-container');
   container.innerHTML='';
}