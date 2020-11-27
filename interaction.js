let button = document.querySelector('button')
let para = document.querySelector('#mon-para')
let select = document.querySelector('#select-color')
let a = 'я тебя люблю'
let b = 'beaucoup'
para.textContent = a

//comment faire click et revenir à l'arrière. Un seul '=' set la variable, double '=' vérifie si elle est égale

button.addEventListener('click', function() {
    
    if (para.textContent == a) {
        para.textContent = b
    } else {
        para.textContent = a
    }
})

let percent = 100;
para.addEventListener('dblclick', function () {
    percent = percent + 20
    para.style.fontSize = percent+'%'
})

select.addEventListener('change', function() {
    console.log(select.value)
    para.style.color = select.value
})

let ageMin = 18;
let genre = 'femme';
let ageHedy = 16;
let genreHedy = 'femme';

if (ageHedy >= ageMin && genreHedy === genre) {
  console.log('Vous êtes séléctionnée')
}
else {
  console.log('désolée...')
}