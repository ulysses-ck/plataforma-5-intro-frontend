alert("Este es el primer ejercicio del Switch")
let respuesta = prompt('Escoge las palabras "casa", "pelota", "perro", "genio" o "arbol"')
switch(respuesta){
    case "casa" : alert("home")
    break
    case "pelota" : alert("ball")
    break
    case "genio" : alert("genius")
    break
    case "perro" : alert("dog")
    break
    case "arbol" : alert("tree")
    break
    default :
    alert("PALABRA INCORRECTA")
}

alert("Este es el segundo ejercicio del Switch")
let valorUser = prompt("Valora del 1 al 5 la pelicula que acabas de ver")
switch(Number(valorUser)){
    case 1 :
        alert("Lamentamos tu opinión. Trabajaremos muy duro para satisfacer tus gustos")
    break
    case 2 :
        alert("Espero que la proxima te guste más")
    break
    case 3 :
        alert("Descuida, la segunda vez que regreses tendrás una mejor experiencia")
    break
    case 4 :
        alert("Nos alegra lo que opinás")
    break
    case 5 :
        alert("NOS ENORGULLECE DE FELICIDAD TU OPINION")
    break
    default:
        alert("ERROR INEPERADO: INGRESAR NUEVAMENTE XD")
}