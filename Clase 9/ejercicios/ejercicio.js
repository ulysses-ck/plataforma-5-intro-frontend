console.log(`Primer Loop`)
num = -10
while(num <= 19){
    console.log(num)
    num++
}

console.log(`Segundo Loop`)
num = 10
while(num <= 40){
    if (num % 2 === 0) {
        console.log(num)
    }
    num++
}

console.log(`Tercer Loop`)
num = 300

while(num <= 333){
    if(num % 2 != 0){
        console.log(num)
    }
    num++
}

console.log(`Cuarto Loop`)
num = 5
while(num < 50){
    if(num % 5 === 0 && num % 3 === 0){
        console.log(num)
    }
    num++
}

console.log(`Producto acumulado`)
num = 3
i = 1
acumulador = 1
while (i <= num) {
    acumulador *= i
    i++
}
console.log(acumulador)

console.log(`Ejercicio Fencepost Loop`)
num = 4
i = 1
acumulador = ""
while(i <= num){
    if(i === num){
        acumulador += i
    }else{
        acumulador += i + ","
    }
    i++
}
console.log(acumulador)

console.log(`Ejercicio FIZZBUZZ`)
let numero = 1
while(numero < 100){
    if(numero % 3 && numero % 5){
        console.log("FizzBuzz")
        console.log(numero)
    }else if(numero % 3 === 0){
        console.log("Fizz")
        console.log(numero)
    }else if(numero % 5 === 0){
        console.log("Buzz")
        console.log(numero)
    }else{
        console.log(numero)
    }
    numero++
}

console.log(`EJercicio - BurroMatico`)
let inputUser

alert("Ya merito LLEGAMOS??")

inputUser = prompt("Responde 'si' o 'no' ")

inputUser = inputUser.toLowerCase()

console.log(inputUser)

while(inputUser !== "si"){
    inputUser = prompt("Responde 'si' o 'no' ")
    inputUser = inputUser.toLowerCase()
    console.log(inputUser)
}

alert("Mayor que cero")
console.log(`Mayor que cero`)
numero = 0
while (numero <= 0) {
    numero = Number(prompt("Escribí un numero mayor a cero"))
    console.log("El numero es " + numero)
}
alert("Piedra, papel o tijera")
console.log("Piedra, papel o tijera")
let suerte
let jugarDeNuevo = "si"
while(jugarDeNuevo === "si"){
    pregunta = ""
    while(!((pregunta === "p") || (pregunta === "pa") || (pregunta === "t"))){
        pregunta = prompt("Escribe 'p', 'pa' o 't'")
        pregunta = pregunta.toLowerCase()
    }
    switch (pregunta){
        case "p":
            if(suerte == 1){
                console.log(`Empate`)
            }else if(suerte == 2){
                console.log(`Pierdes`)
            }else{
                console.log(`Ganas`)
            }
        break
        case "pa":
            if(suerte == 1){
                console.log(`Ganas`)
            }else if(suerte == 2){
                console.log(`Empate`)
            }else{
                console.log(`Pierde`)
            }
        break
        case "t":
            if(suerte == 1){
                console.log(`Pierdes`)
            }else if(suerte == 2){
                console.log(`Ganas`)
            }else{
                console.log(`Empate`)
            }
    }
    jugarDeNuevo = prompt('Deseas jugar de nuevo? (Escribe "y")')
    jugarDeNuevo = jugarDeNuevo.toLowerCase()
}

alert("Adivina un número")
let adivina = 0
acumulador = 0
while(!(num = Number    (prompt("Digita un numero entero")))){}
suerte = Math.ceil(Math.random() * num)
while(adivina != suerte){
    adivina = parseInt(prompt("Adivina el numero, recuerda que dabe ser de 1 a " + n))
    if(adivina > suerte){
        console.log("Se trata de un número menor, intenta de nuevo!")
    }
    if(adivina < suerte){
        console.log("Se trata de un número mayor, intenta de nuevo!")
    } 
    acumulador++
}
console.log("Felicidades! adivinaste en el intento numero: " + acumulador)

alert("Welcome N")
num = Number(prompt("Escribi un numero 'entero'"))
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