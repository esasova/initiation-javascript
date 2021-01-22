// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
const questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];
//l'affichage des questions
const content = document.getElementById('contenu');


for (let question of questions){
    let enonce = document.createElement('p');
    enonce.textContent = question.enonce;
    content.appendChild(enonce);
    const answerButton = document.createElement('button');
    answerButton.textContent = 'Afficher la réponse';
    content.appendChild(answerButton);
//affichage des réponses
    answerButton.addEventListener('click', ()=>{
        answerButton.innerHTML = '';
        let answer = document.createElement('p');
        answer.textContent = question.reponse;
        enonce.appendChild(answer);
    })
}