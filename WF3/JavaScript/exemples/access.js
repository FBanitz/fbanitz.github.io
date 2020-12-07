let resultat4 = document.getElementById('id1');
console.log(resultat4.textContent);

let titre2 = document.getElementById('titre2');
let div1 = document.getElementById('div1');

let new3 = document.createElement('p');
new3.textContent="paragraphe créé par insertBefore";

div1.insertBefore(new3,titre2)