let btn = document.querySelector("#enviar")
let objeto = document.querySelector("#nombre")
let cantidad = document.querySelector("#cantidad")
let initTag = document.querySelector("#inicio_etiqueta")
let endTag = document.querySelector("#final_etiqueta")
btn.addEventListener("click", tomarValor)
function tomarValor() {
    i = -1
    objeto = objeto.value
    console.log(objeto)
    cantidad = Number(cantidad.value)
    console.log(cantidad)
    initTag = initTag.value
    endTag = endTag.value
    acum = ""
    for (let i = 0; i <= cantidad; i++) {
        if((initTag !== "") && (endTag !== "")){
            console.log(initTag + objeto + i + endTag)
            acum = initTag + objeto + i + endTag +"<br>"
            document.querySelector("body").insertAdjacentHTML("beforeend", acum)
        }else{
            console.log(objeto + i)
            acum = objeto + i + "<br>"
            document.querySelector("body").insertAdjacentHTML("beforeend", acum)
        }        
    }
}