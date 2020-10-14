let button = document.querySelector ('button')

button.addEventListener('click', function(){

    para.textContent = bc;
})


let para = document.querySelector ('#mon-para')

let bc = 'bouton cliqué'

para.addEventListener('dblclick', function (){

    para.style.fontSize = '200%'
})

let select = document.querySelector('#select-color')

select.addEventListener('change', function(){
    console.log(select.value);
    para.style.color = select.value;
})

