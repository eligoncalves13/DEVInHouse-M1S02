let numParticipants = document.querySelector('#num_participants');
let numSatisfied = document.querySelector('#num_satisfied');
let avarageAge = document.querySelector('#avarage_age');
let sumAge = 0;

function start(){
    const nameUser = window.prompt('Digite seu nome: ');
    const satisfaction = parseInt(window.prompt('Digite um número de 1 a 10 para expressar sua satisfação: '));
    const agerUser = parseInt(window.prompt('Digite sua idade: '));
    
    const includeSatisfaction = parseInt(window.prompt('Podemos incluir você na lista de satisfeitos? 0-Não | 1-Sim '));
    window.alert('Salvo com sucesso!');
    //Adicionar participantes
    let numParticipantsValue = numParticipants.innerHTML;
    numParticipantsValue++;
    numParticipants.innerHTML = numParticipantsValue;
    //Adicionar média dos participantes
    let avarageAgeValue = avarageAge.innerHTML;
    sumAge += agerUser;
    avarageAgeValue = sumAge / numParticipantsValue;
    avarageAge.innerHTML = avarageAgeValue.toFixed(1);
    //Adicionar número de satisfeitos
    if(includeSatisfaction === 1){
        let numSatisfiedValue = numSatisfied.innerHTML;
        numSatisfiedValue++;
        numSatisfied.innerHTML = numSatisfiedValue;
    } else{
        console.log("Não incluso na lista de satisfeitos!");
    }
}
