const body = document.querySelector('body');

function getRandomInteger(min,max){
    return Math.floor(Math.random() * ((max) - min) + min);
}

function reloadPage(){
    let topCount = 0;
    let bottomCount = 0;
    let oneHundredCount = 0;
    //Definir as regras 
    for(i = 1; i <= 1000; i++){
        const randomNumber = getRandomInteger(1 , 1000);
        if(randomNumber >= 501){
            topCount++;     
        }
        if(randomNumber < 501){
            bottomCount++;    
        }
        if(randomNumber === 100){
            oneHundredCount++;
        }
    }
    changeBackground(topCount, bottomCount, oneHundredCount);
}

//Alterar background conforme regras
function changeBackground(topCount, bottomCount, oneHundredCount){
    if(topCount > bottomCount){
        body.style.backgroundImage = "url('https://picsum.photos/200/300')";
    }
    if(bottomCount > topCount){
        body.style.backgroundImage = "url('https://via.placeholder.com/500')";
    }
    if(oneHundredCount === 1){
        body.style.backgroundImage = 'none';
        body.style.backgroundColor = 'orange';
    }
    if(oneHundredCount > 1){
        body.style.backgroundImage = 'none';
        body.style.backgroundColor = "black";
    }
}


