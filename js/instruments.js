//trouve les liens et récupère la longueur du tableaux
let links = document.querySelectorAll('a');
console.log(links.length);
//affiche le premier lien
console.log(links[0].href);
//trouve la position du dernier lien et l'affiche
let lastItem = links.length - 1;
console.log(links[lastItem].href);

// fonction qui vérifie qu'un élément possède une classe
const possede = (instrument, classe) => {
    let classes = document.getElementById(instrument);
    if (classes !== null){
            console.log(classes.classList.contains(classe))
        } 
    else {
        console.log('mauvais instrument')
    }
    
        
    
}
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur