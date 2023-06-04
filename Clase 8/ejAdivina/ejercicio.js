alert("Este es el ejercicio de ADIVINA el numero")
let secretNumber = 10
let respUser = prompt(`Adivina el numero secreto`)
if(respUser != ""){
    if(secretNumber === Number(respUser)){
        alert(`Adivinaste el numero ${secretNumber}`)
    }else if(secretNumber < respUser){
        alert('Te equivocaste y Tu numero es mas grande que el numero secreto')
    }else if(secretNumber > respUser){
        alert('Te equivocaste y Tu numero es mas pequeño que el numero secreto')
    }
}else{
    alert(`No pusiste nada man`)
}