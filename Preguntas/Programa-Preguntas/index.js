let inputUno = document.querySelector("#pregunta-primero")
let respUno = document.querySelector("#respuesta-primero")
let inputDos = document.querySelector("#pregunta-segundo")
let respDos = document.querySelector("#respuesta-segundo")
let inputRespuestasJUgadorUno = document.querySelector("#respuestas-jugadoruno")
let inputRespuestasJUgadorDos = document.querySelector("#respuestas-jugadordos")
let btn = document.querySelector("#enviarBtn")
btn.addEventListener("click", function() {
    compararValores(respUno, inputRespuestasJUgadorUno)
    console.log("Se pudo")
})
function compararValores(respuestaVerdadera, respuestaUser) {
    if(respuestaVerdadera.value === respuestaUser.value){
        console.log("Bien")
    }else{
        console.log("Mal")
    }
}