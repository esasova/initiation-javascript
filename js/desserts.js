//récupération du bouton et de la liste
const bouton = document.querySelector('button');
const liste = document.getElementById('desserts');


bouton.addEventListener('click', ()=>{
//ajout d'un prompt au bouton et affichage du résultat
    let query = prompt('Votre dessert préféré ?');
    const dessert = document.createElement('li');
    dessert.textContent = query;
    liste.appendChild(dessert);
//modification du résultat
    dessert.addEventListener('click', ()=>{
        let newQuery = prompt('Modifiez ?');
        dessert.textContent = newQuery;
    })
})
