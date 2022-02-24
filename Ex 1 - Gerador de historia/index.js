const nameUser = window.prompt('Digite seu nome: ');
const ageUser = window.prompt('Digite sua idade: ');
const favoriteSport = window.prompt('Digite seu esporte favorito: ');
const favoriteDay = window.prompt('Digite seu dia da semana predileto: ');
const importantPerson = window.prompt('Digite o nome de alguem importante: ');
const admirablePerson = window.prompt('Digite o nome de alguem que você admira: ');

const completeText = `Hoje, ${favoriteDay.toLowerCase(favoriteDay)}, é um dia histórico. Todos os fãs de ${favoriteSport.toLowerCase(favoriteSport)} estão maravilhados com a proeza realizada pelo(a) atleta ${nameUser}. ${importantPerson} não conteve as lágrimas ao comentar sobre em uma entrevista e até o(a) ${admirablePerson} twittou “é muito bom ver alguém com ${ageUser} demonstrando tanta habilidade”`;

window.alert(completeText);