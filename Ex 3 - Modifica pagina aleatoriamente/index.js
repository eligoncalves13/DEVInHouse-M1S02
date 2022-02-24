const bgColor = ['#000000','#1A1A1A','#1A3D4C'];
const elementColor = ['#E6E6E6','#CCCCCC','#0D2526'];
const textColor = ['white','black'];

function getRandomInteger(min, max){
    //Sortear números inteiros
    return Math.floor(Math.random() * ((max) - min) + min);
}

function changeStyle(){
    //Alterar estilo do background do body
    const body = document.querySelector('body');
    const randomBgColor = bgColor[getRandomInteger(0, bgColor.length)];
    body.style.backgroundColor = randomBgColor;
    //Alterar estilo do background do elemento
    const element = document.querySelector('#element');
    const randomElementColor = elementColor[getRandomInteger(0, elementColor.length)];
    element.style.backgroundColor = randomElementColor; 
    //Alterar estilo da cor de texto
    const text = document.querySelector('#text');
    const randomTextColor = textColor[getRandomInteger(0, textColor.length)];
    text.style.color = randomTextColor;
}

