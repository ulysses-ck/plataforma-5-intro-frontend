let seEjecutaEnEvento = function (){
    document.querySelector("body").insertAdjacentHTML("beforeend", "<p style='background-color:yellow;color:black'>Beep</p><br>")
    document.querySelector("body").classList.toggle("color")
}// la funcion debe estar antes de la llamada debido al hoisting javascript

let button = document.querySelector("button.beep")
button.addEventListener("click", seEjecutaEnEvento)

console.log("Ejercicio resaltado")

let pes = document.querySelectorAll("div.card p")

for (let i = 0; i < pes.length; i++) {
    pes[i].addEventListener("click", function(){
        this.classList.toggle("resaltado")
    })
}