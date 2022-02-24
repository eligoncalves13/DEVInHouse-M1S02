let text = [];
let word = '';
const body = document.querySelector('body');

document.addEventListener("DOMContentLoaded", sortText);

//Condicional para o prompt 
while(word.toLowerCase() !== 'parar'){
    word = window.prompt('Digite uma palavra ou digite "parar" para sair: ');
    text.push(word.toLowerCase());
    if(word.toLowerCase() === 'parar'){
        text.pop();
    }
}

function sortText(){
    //Ordernar
    text.sort(numberCharacters)
    //Criar secções com os textos do array
    for (let value in text){
        const section = document.createElement('section');
        section.textContent = text[value];
        body.appendChild(section);
    }
}
//Menor para o maior 
function numberCharacters(a, b){
    return a.length - b.length;
}
