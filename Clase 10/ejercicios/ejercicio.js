console.log('%c Esta es la funcion con la fecha tipeada', 'color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white')
function fechaYHora(){
    console.log("LA fecha es Miercoles, 19 de Agosto de 2020, Zona Horaria GMT-0300 10:27")
}
console.log('funcion fechaYHora() ' + fechaYHora())

//Por razones que desconozco al momento la funcion se ejecuta antes de que el console.log() llame a la misma.

console.log("%cEsta es la funcion con la funcion nativa Date(). Previa a los ejercicios", "color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white")

function fechaConDate(){
    console.log("LA fecha es " + Date() + " que la vas a entender si sabes ingles XD")
}

console.log('funcion fecha con date fechaConDate()' + fechaConDate())

//Ya lo entendí, es por el hoisting de javascript.

console.log("%cEjercicio decirHola", "color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white");

function decirHola(persona){
    persona = prompt('Escribí tu nombre')
    //Acá "persona" existe por asi decirlo dentro de una funcion
    alert(`Hola ${persona}, Bienvenid@`)
}

console.log(`funcion decirHola() ${decirHola()}`)

console.log('%c Ejercicio 1', 'color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white')

alert("funcion tripler()")

let numero = prompt('Escribi un numero')

function tripler(num){
    Number(num)
    resultado = num * 3
    return resultado
}

tripler(numero)

//Devuelve el triple de numero

alert("funcion multiply()")

let numeroUno = prompt("Escribi un numero")

let numeroDos = prompt("Escribi otro numero")


function multiply(numUno, numDos) {
    Number(numUno)
    Number(numDos)
    numUno *= numDos
    return numUno
}

console.log(`Funcion multiply con tus numeros ${numeroUno}. ${numeroDos}. El producto es ${multiply(numeroUno, numeroDos)}`)

//Devuelve el producto de numeroUno y numeroDos

alert("funcion divide()")

numeroUno = prompt("Escribi un numero")

numeroDos = prompt("Escribi otro numero")


function divide(numUno, numDos) {
    Number(numUno)
    Number(numDos)
    resultado = numUno / numDos
    return resultado
}

console.log(`Funcion divide con tus numeros ${numeroUno}. ${numeroDos}. El cociente es ${divide(numeroUno, numeroDos)}`)

alert("funcion reminder()")

numeroUno = prompt("Escribi un numero(oh shit here we go again)")

numeroDos = prompt("Escribi otro numero")


function reminder(numUno, numDos) {
    Number(numUno)
    Number(numDos)
    resultado = numUno % numDos
    return resultado
}

console.log(`Funcion reminder con tus numeros ${numeroUno}. ${numeroDos}. El resto es ${reminder(numeroUno, numeroDos)}`)

alert("Usando las funciones de Matematica Simple")

console.log(`${reminder(divide(multiply(tripler(5), 12), 12), 3)} Es el resultado`)

alert("Ejercicio Es Par")

numero = prompt('Escribi un numero y dire si es par')

function esPar(numero){
    if(numero % 2 === 0){
        return true + console.log(`Verdadero`)
    }else{
        return false + console.log(`Falso`)
    }
}

esPar(numero)



alert("FizzBuzz 2: La venganza de FizzBuzz")

let stringUno = prompt('Escribi una frase que se va a escribir')
let stringDos = prompt('Escribi otra frase que se va a escribir')

//Le puse distintos nombres para confundirme más.

function fizzbuzz2(str1, str2){
    limite = 100

    i = 1
    
    acumulador = ""

    while(i <= limite){
        if(i % 5 === 0 && i % 3 === 0){
            console.log(`${str1} ${str2} (estas son las dos frases que elegiste) y el numero que acompaña es ${i}.`)
        }else if(i % 3 === 0){
            console.log(`${str1} (estas es la frase que elegiste) y el numero que acompaña es ${i}.`)
        }else if(i % 5 === 0){
            console.log(`${str2} (estas son las dos frases que elegiste) y el numero que acompaña es ${i}.}`)
        }else{
            console.log(`Este numero no tiene frase ${i}. `)
        }
        
        acumulador += i + ","
        
        i++
    }

    return acumulador + console.log('%c Este es el string separado por comas', 'color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white')
    

    
}

function normal(palabra1, palabra2, hasta, multiplo1, multiplo2){
    function normal(palabra1, palabra2, hasta, multiplo1, multiplo2){
        for(let i = 0; i<= hasta; i++ ){
            if(i%multipo1==0 && 1%multiplo2== 0){
                console.log(`${palabra1}${palabra2}, `)
            }else if(i%multiplo2==0){
                console.log(`${palabra2}, `)
            } else if(i%multiplo1==0){
                console.log(`${palabra1}, `)
            }else {
                console.log(`${i}, `)
            }
        }
    }
}