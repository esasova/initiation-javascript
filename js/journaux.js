// Liste des journaux
const journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

//récupération de l'élémént parent
const contenu = document.getElementById('contenu');
//création de la liste dans l'élément parent
const liste = document.createElement('ul');
contenu.appendChild(liste);

//récupération des éléments du tableau
for(let i = 0; i < journaux.length; i++){
let journal = document.createElement('li');
journal.textContent = journaux[i];
liste.appendChild(journal)
}
