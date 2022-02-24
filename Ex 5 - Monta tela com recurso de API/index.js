const body = document.querySelector('body');

do {
    var number = window.prompt('Digite um número de 1 a 10: ');
} while(number < 1 || number > 10);

for(let i = 1; i <= number; i++){
    fetch(`https://dog.ceo/api/breeds/image/random`).then(function (data) {
      return data.json(); 
    }).then(function (json) {
        const section1 = `<section class="section1" style="background-image: url('${json.message}')"></section>`;
        body.insertAdjacentHTML("beforeend", section1);
    })

    fetch(`https://api.thecatapi.com/v1/images/search`).then(function (data) {
      return data.json();
    }).then(function (json) {
        const section2 = `<section class="section2" style="background-image: url('${json[0].url}')"></section>`;
        body.insertAdjacentHTML("beforeend", section2);
    })
}