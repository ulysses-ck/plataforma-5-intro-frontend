console.log(`Este es el ej2`)
alert(`Este es el ej2`)
let numberUser = parseFloat(prompt("Pone un numero cualquiera"))
if(numberUser != ""){
    if(numberUser%2 == 0){
        alert("TU NUMERO ES PAR")
    }else{
        alert("TU NUMERO ES IMPAR")
    }
}else{
    alert("NO pusiste NADA")
}
