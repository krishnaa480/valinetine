function moveRandom(elem){
    elem.style.position = "absolute";
    elem.style.top = Math.floor(Math.random()* 90 + 5) + "%";
    elem.style.left = Math.floor(Math.random()* 90 + 5) + "%";
}

const moverandom = document.querySelector("#move-random");

moverandom.addEventListener("mouseenter", function(e){
    moveRandom(e.target)
})
