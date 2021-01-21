//récupération du bouton et de la liste
const bouton = document.querySelector('button');
const liste = document.getElementById('desserts');


bouton.addEventListener('click', ()=>{
//ajout d'un prompt au bouton
    let query = prompt('Votre dessert préféré ?');
    const dessert = document.createElement('li');
    dessert.textContent = query;
    liste.appendChild(dessert);
})