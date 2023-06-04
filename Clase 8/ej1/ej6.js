console.log(`Este es el ej6`)
alert(`Este es el ej6`)
let edadUsuario = prompt("Ingresa tu edad"), edadMayor = 18, edadBeber = 21

if(edadUsuario != ""){
    if(parseFloat(edadUsuario) < edadMayor){
        console.log(`No puedes ingresar al bar! y tu edad es ${parseFloat(edadUsuario) % 2 === 0? "PAR" : "IMPAR"}`)
    }else if(parseFloat(edadUsuario) === edadBeber){
        console.log(`Podes empezar a beber  y tu edad es ${parseFloat(edadUsuario) % 2 === 0? "PAR" : "IMPAR"}
        `)
    }else{
        console.log(`Adelante, Bienvenido y tu edad es ${parseFloat(edadUsuario) % 2 === 0? "PAR" : "IMPAR"}`)
    }
}else{
    alert("TENES QUE PONER ALGO")
}
