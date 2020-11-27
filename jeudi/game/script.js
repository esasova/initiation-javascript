let ship = document.querySelector('.character')
let playzone = document.querySelector('.playzone')

playzone.addEventListener ('mousemove', function(event){
    let x = event.clientX;
    let y = event.clientY;
    ship.style.top = y + 'px';
    ship.style.left = x + 'px';
})

let obstacles = document.querySelectorAll ('.obstacle')

function randomRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (const item of obstacles) {
    item.style.top = randomRange (0, 600) + 'px';
    item.style.left = randomRange (0, 600) + 'px';
} 