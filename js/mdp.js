//éléments du formulaire
let form = document.querySelector('form');
//zones de saisie des mdp
let mdp1 = document.getElementById('mdp1');
let mdp2 = document.getElementById('mdp2');
// zone de réponse
let answer = document.getElementById('infoMdp');

//la vérification après submit (mdp identiques, 6+ symboles, une chiffre obligatoire)
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let regexMdp = /[0-9]/;
    if(mdp1.value === mdp2.value && mdp1.value.length > 6 && regexMdp.test(mdp1.value)){
        answer.textContent = 'good'
    } else {
        answer.textContent = 'bad'
    }
})