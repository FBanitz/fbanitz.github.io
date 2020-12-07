// document.addEventListener('DOMContentLoaded', function() {

    let bonjour = document.getElementById('bouton1');
    let ajouter = document.getElementById('bouton2');

    bonjour.addEventListener('click', alerte);
    ajouter.addEventListener('click', ajout);

// });

function alerte() { alert('Bonjour'); }

function ajout() {
    let phrase=document.createElement('p');
    phrase.textContent = 'Phrase ajoutée';
    document.body.appendChild(phrase);
}

// Commentaire sur une ligne

/*
    Commentaire sur
    plusieurs lignes
*/

//
// Commentaire sur
// plusieurs lignes
//

