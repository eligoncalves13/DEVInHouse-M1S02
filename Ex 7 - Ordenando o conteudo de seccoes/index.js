const text = ['animal','carro','humano','prédio','cadeira','objeto']; 
const body = document.querySelector('body');

document.addEventListener("DOMContentLoaded", sortText);

function sortText(){
    //Ordenar
    text.sort();
    //Criar seções com os valores do texto
    for (let value in text){
        const section = document.createElement('section');
        section.textContent = text[value];
        body.appendChild(section);
    }
}