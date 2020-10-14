let button = document.querySelector('button')
let para = document.querySelector('#mon-para')
let select = document.querySelector('#select-color')

button.addEventListener('click', function() {
    const a = '1'
    const b = '0'
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
