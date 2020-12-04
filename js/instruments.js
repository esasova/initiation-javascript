//trouve les liens et récupère la longueur du tableaux
let links = document.querySelectorAll('a');
console.log(links.length);
//affiche le premier lien
console.log(links[0].href);
//trouve la position du dernier lien et l'affiche
let lastItem = links.length - 1;
console.log(links[lastItem].href)