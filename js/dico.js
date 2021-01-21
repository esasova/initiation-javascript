// Liste des mots du dictionnaire
const mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

//l'élément parent
const content = document.getElementById('contenu');

//boucle for qui itère le tableau et affiche les éléments
for (let mot of mots){
    let terme = document.createElement('h3');
    terme.textContent = mot.terme;
    content.appendChild(terme);
    let defin = document.createElement('p');
    defin.textContent = mot.definition;
    content.appendChild(defin);
}