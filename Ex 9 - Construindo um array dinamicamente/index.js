let text = [];
let word = '';
const body = document.querySelector('body');

document.addEventListener("DOMContentLoaded", sortText);

while(word.toLowerCase() !== 'parar'){
    word = window.prompt('Digite uma palavra ou digite "parar" para sair: ');
    text.push(word.toLowerCase());
    if(word.toLowerCase() === 'parar'){
        text.pop();
    }
}

function sortText(){
    //Ordernar reversamente
    text.sort().reverse();
    //Criar secções com os textos do array
    for (let value in text){
        const section = document.createElement('section');
        section.textContent = text[value];
        body.appendChild(section);
    }
}


