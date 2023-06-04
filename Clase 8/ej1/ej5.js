console.log(`Este es el ej5`)
alert(`Este es el ej5`)
if(12 === 12){
    console.log("Esto siempre va a ser verdad 12 === 12")
}
if( 12 != 12){
    console.log("Esto nunca va a ser verdadero 12 != 12")
}else{
    console.log("Este console es del if que nunca da true. Funciona: 12 != 12")
}
let estTriste= "TRISTE", estFeliz = "FELIZ"
let estadoUser = prompt("Como te sentis '(TIPEA si estas TRISTE o FELIZ )'")
if(estadoUser === estTriste && estadoUser != ""){
    alert("Mira algunas imagenes de GATITOS o CACHORROS, siempre levanta el animo. Si NO TE SIRVE tenes que tomar antidepresivos, de una")
}else if(estadoUser === estFeliz && estadoUser != ""){
    alert("No tengo algo que decirte. Segui FELIZ")
}else{
    alert("NO PUSISTE NADA")
}

let numSecret = 3
let resP = parseFloat(prompt("Cual es el numero secreto. PISTA ESTA ENTRE EL 1 Y EL 9"))
if(resP != ""){
    if(resP != numSecret){
        alert("el NUMERO ES 3")
    }
    else{
        alert("lo ADIVINASTE")
    }
}else{
    alert("NO PUSISTE NADA")
}
let pass = "contraseña"
let passUser = prompt("Ingresa la 'contraseña'. GUIÑO, GUIÑO")
if(passUser != ""){
    if(pass === passUser){
        alert("WELCOME")
    }else{
        window.location = "http://www.google.com"
    }
}else{
    alert("VOLVISTE A NO PONER NADA WEY")
}
//Poner todo esto con funciones para ejecutarlos por botones XD