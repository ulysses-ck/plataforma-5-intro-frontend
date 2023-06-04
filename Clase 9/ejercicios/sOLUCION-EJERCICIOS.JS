//************* Ejercicio 1 Imprimí todos los números entre -10 y 19
let i = -10
console.log("***** Solucion Ejercicio 1 numeros entre -10 y 19 *****")
while (i <= 19){
    console.log(i)    
    i++
}

//************* Ejercicio 2 Imprimí todos los números pares entre 10 y 40
console.log("***** Solucion Ejercicio 2 pares entre 10 y 40 *****")
i = 10
while (i <= 40){
    console.log(i)    
    i+=2
}

//************* Ejercicio 3 Imprimí todos los números impares entre 300 y 333
console.log("***** Solucion Ejercicio 3 impares entre 300 y 333 *****")
i = 301
while (i <= 333){
    console.log(i)    
    i+=2
}

//************* Ejercicio 4 Imprimí todos los números divisibles por 5 y 3, a la vez, entre 5 y 50
console.log("***** Solucion Ejercicio 4 divisibles por 5 y 3 *****")
i = 5
while ( i <= 50){
    if(!((i % 5) || (i % 3))){
        console.log(i)    
    }
    i++
}

//************* Ejercicio 5 Producto acumulado
let acumulador = 1
let n = 5
i = 1
console.log("***** Solucion Ejercicio 5  Producto acumulado *****")
while(i <= n){
    acumulador *= i
    i++
}
console.log(acumulador)

//************* Ejercicio 6 Fencepost Loop
console.log("***** Solucion Ejercicio 6 Fencepost Loop ****")
i=1
n = 5
let cadena=""
while(i < n){
    cadena = cadena + i + ","
    i++
    if(i === n){
        cadena += i
        console.log(cadena) 
    }
}

//************* Ejercicio 7 FizzBuzz
console.log("***** Solucion Ejercicio 7 FizzBuzz ****")
i = 1
while( i <= 100){
    if(!((i % 5) || (i % 3)) ){
        console.log("FizzBuzz")
    }else if(!(i % 3)){
        console.log("Fizz")
    }else if(!(i % 5)){
        console.log("Buzz")
    }else{
        console.log(i)
    }
    i++
}

//************* Ejercicio 8 Burro-mático
console.log("***** Solucion Ejercicio 8 Burro-mático ****")
let pregunta =""
while(pregunta != 'si'){
    pregunta = prompt("Ya merito llegamos?")
    pregunta = pregunta.toLowerCase()
}
console.log("Bienvenid@ a Muy Muy Lejano!")

//************* Ejercicio 9 Mayor a 0
let numero = -1
console.log("***** Solucion Ejercicio 9 Mayor a 0 ****")
while(numero <= 0){
    numero = parseInt(prompt("Digita el numero mayor a cero"))
    console.log("El numero digitado fue: " + numero)
}

//************* Ejercicio 10 Piedra, Papel, o Tijera.
let rand
let jugarDeNuevo = "y"
console.log("***** Solucion Ejercicio 10 Piedra, Papel, o Tijera. ****")
while(jugarDeNuevo === 'y'){// Si el usuario quiere jugar de nuevo entonces....
    pregunta = ""
    while(!((pregunta === 'p') || (pregunta === 'pa') || (pregunta === 't'))){//Pida input hasta que el usuario introduce ya sea "P", "Pa" o "T"
        pregunta = prompt("Digita P, PA ó T")
        pregunta = pregunta.toLowerCase()
    }
        rand = Math.ceil(Math.random() *3) // Si el random es un equivale a Piedra, si es 2 equivale a Papel y si es 3 equivale a tijera.
    if(pregunta === 'p'){ //Si el usuario digitó piedra haga...
        if(rand === 1){
            console.log("Empate!")
        }else if(rand === 2){
            console.log("Pierdes!")
        }else{
            console.log("Ganas!")
        }
    }
    if(pregunta === 'pa'){ //Si el usuario digitó papel haga...
        if(rand === 1){
            console.log("Ganas!")
        }else if(rand === 2){
            console.log("Empate!")
        }else{
            console.log("Pierdes!")
        }
    }
    if(pregunta === 't'){ //Si el usuario digitó Tijera haga...
        if(rand === 1){
            console.log("Pierdes!")
        }else if(rand === 2){
            console.log("Ganas!")
        }else{
            console.log("Empate!")
        }
    }
    jugarDeNuevo = prompt("Si deseas jugar de nuevo digita 'y' ")
    jugarDeNuevo = jugarDeNuevo.toLowerCase()
}

//************* Ejercicio 11 Adiviná un número.
console.log("***** Solucion Ejercicio 11 Adiviná un número. ****")
let adivina = 0 //Lo inicializo en cerom para que infrese al while la primera vez, recordar que el random varia de 1 a n
acumulador = 0
while(!(n = parseInt(prompt("Digita un numero entero")))){}//Se me ocurrio esto, no se si sea óptimo hacerlo pero funciona. lo que hace es seguir preguntando 'n' hasta que sea diferente de NAN.
rand = Math.ceil(Math.random() * n) //Random de 1 a n
while(adivina != rand){
    adivina = parseInt(prompt("Adivina el numero, recuerda que dabe ser de 1 a " + n))
    if(adivina > rand){
        console.log("Se trata de un número menor, intenta de nuevo!")
    }
    if(adivina < rand){
        console.log("Se trata de un número mayor, intenta de nuevo!")
    } 
    acumulador++
}
console.log("Felicidades! adivinaste en el intento numero: " + acumulador)

//************* Ejercicio 12 Welcome N!.
console.log("***** Solucion Ejercicio 12 Welcome N! ****") //Este estaba muy loco, Como dice el profe "Divide en problemas mas pequeños"
n = parseInt(prompt("Digita un numero entero N"))
i = 1
let j
while(i <= n){
    cadena = "Welcome " + i
    if(i > 1){
        cadena += ", meet 1"
        j = 2
        while(j < i){
            j++
            if(j === i){
                cadena += " and " + (j - 1)
            }else{
                cadena += ", " + (j - 1)
            }

        }
      
    }
    console.log(cadena)
    i++
}