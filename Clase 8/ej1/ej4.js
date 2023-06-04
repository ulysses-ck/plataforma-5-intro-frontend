console.log(`Ejercicio de Me puedo Jubilar xdd`)
alert(`Este es el ej4`)
let edadJubilarF = 60, edadJubilarM = 65, edadM, edadF; 
let inputGenero = prompt("Tipea F para mujer o M para hombre")
if(inputGenero === "M" && inputGenero != ""){
    edadM = parseFloat(prompt("Pone tu edad"));
    console.log(edadM)
    console.log(edadJubilarM - edadM)

    if(edadM >= edadJubilarM){
        alert("Jubilado")
    }else{
        alert(`Te faltan ${edadJubilarM - edadM} años para pode jubilarte, todavia tenes que trabajar :-)`)
    }
}else if(inputGenero === "F" && inputGenero != ""){
    edadF = parseFloat(prompt("Pone tu edad"));
    console.log(edadF)
    console.log(edadJubilarF - edadF)

    if(edadF >= edadJubilarF){
        alert("Ya podes jubilarte")
    }else{
        alert(`Te faltan ${edadJubilarF - edadF} años para pode jubilarte, todavia tenes que trabajar :-)`)
    }
}else{
    alert("No pusiste tu genero. Recargar página")
}