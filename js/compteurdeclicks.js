// le comptage des clicks
const click = ()=>{
        const compteur = document.getElementById('compteurClics');
        compteur.innerHTML++;
    }
// ajout de l'événement au premier bouton
const boutonAct = document.getElementById('clic');
boutonAct.addEventListener('click', click)

//désactivation du comptage
    const boutonDes = document.getElementById('desactiver');
    boutonDes.addEventListener('click', function(){
        boutonAct.removeEventListener('click', click);
    })
