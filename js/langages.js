// création des éléments
let paraElt = document.createElement('p');
let lienElt = document.createElement('a');

// définition de l'attribut et du texte du lien
lienElt.href = 'https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation';
lienElt.textContent = 'liste';

//assemblage des éléménets html
paraElt.appendChild(document.createTextNode('En voici une '));
paraElt.appendChild(lienElt);
paraElt.appendChild(document.createTextNode(' plus complète'));
document.getElementById('contenu').appendChild(paraElt);