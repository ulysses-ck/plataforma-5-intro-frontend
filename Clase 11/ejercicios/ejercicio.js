alert(` Este es el ejercicio Lista de Super 1`)

const listaDeSuper = []
listaDeSuper[0] = "Sal"
listaDeSuper[1] = "Mermelada"
listaDeSuper[2] = "Aceit3"
listaDeSuper[3] = "Manaos"
listaDeSuper[4] = "UltimoElemento(Fernet)"

console.log(listaDeSuper[0])

console.log(listaDeSuper[listaDeSuper.length - 1])

alert("Segundo Ejercicio")

let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"]

function tengoAmigo(nomPersona) {
    if(amigos.indexOf(nomPersona) !== -1){
        console.log(`ah si! me había olvidado de ${nomPersona}!`)
    }else{
        console.log(`… tengo que conseguirme algún amigo ${nomPersona}!`)
    }
    
}

tengoAmigo("Pepe")

let str = "one two three"
let arr = str.split(' ')  // ["one", "two", "three"]
// El string con un espacio como argumento señala donde será el corte
let arr2 = str.split("e") // ["on", " two thr", "", ""]
// Como vemos ahora las e desaparecieron, y donde estaban las e, se separo cada elemento.
let new_str = arr.join(" ") // "one two three"
//ahora utilizamos el espacio para unir cada elemento del arreglo
new_str = arr.join(' and a ') // "one and a two and a three"
// Podemos utilizar cualquier cadena de caracteres para unir nuestros elementos.

alert("tERCER EJERCICIO Lista de super 2")


listaDeSuper.push("1 Ultimo ultimo elemento del array     (nutella  ™)")
listaDeSuper.push("2 Ultimo ultimo elemento del array     (Lays ™)")

console.log(listaDeSuper[listaDeSuper.length - 1])

listaDeSuper.unshift("1 Primer primer elemento del array(nutella 2)")
listaDeSuper.unshift(`2 Ultimo primer elemento del array (Lays ™ 2)`)

listaDeSuper[0]
listaDeSuper[1]

console.log(listaDeSuper.length + " es el largo del array")

let noHabia = listaDeSuper.pop()
let comprado = listaDeSuper.shift()

console.log(listaDeSuper.length + " es el largo del array al ultimo")

alert("Cuarto Ejercicio")

let numbers = [0,1,2,3,4,5,6,7,8,9,10]
let colores=["Rojo", "Azul", "Verde", "Amarillo"]
numbers.forEach(function(color){
  if(color % 3 === 0){
    console.log(color)
  }
})

// Devuelve 0 3 6 9 xq el array es numbers y la variable solo tiene el nombre color.

alert("Quinto Ejercicio Lista De Super 2")

function logeaItems(arr){
    arr.forEach(element => {
        console.log(element)
    });
}

const arrayExample = ["Ejemplo1", "Ejemplo2", "Ejemplo3", "Ejemplo..."]

logeaItems(listaDeSuper)
logeaItems(arrayExample)

alert("Sexto Ejercicio")
let poemaDesordenado = "roses red are bacon crispy i bacon love and is blue violets are"
let arregloDesordenado = poemaDesordenado.split(" ")
let arregloOrdenado = []
while(arregloDesordenado.length > 0){
    arregloOrdenado.push(arregloDesordenado.shift())
    arregloOrdenado.push(arregloDesordenado.pop())
}
let poemaOrdenado = arregloOrdenado.join(" ")
console.log(poemaOrdenado)
alert("Septimo Ejercicio Reverser")

function reverser(arr) {
    for (i=Arreglo.length - 1; i >= 0; i-- ){
        console.log(Arreglo[i])
    }
}

alert("Ejercicio 8 isUniform")
console.log(isUniform([1, 1, 1, 1])) // true
console.log(isUniform([1, 2, 1, 1])) // false
console.log(isUniform(["a", "b", "p"])) // false
console.log(isUniform (["b", "b", "b"])) // true
function isUniform(arr) {
    for (let i = 1; i < arr.length; i++) {
        if(Arreglo[i - 1] !== Arreglo[i]){
            return "false"
        }
    }
    return "true"
}
alert("Ej 9 SumArray")
let sum = 0
function SumArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
alert("ej 10 biggest smallest")
console.log("*********Ejercicio 10 Biggest Smallest*********")
console.log(biggest_smallest([10, 3, 10, 4, 15, 2, 1]))
console.log(biggest_smallest([56,23,5,1,6,7]))

function biggest_smallest(arr){
    let resul = [arr[0], arr[0]]
    arr.forEach(function(max_min){
        if(max_min < resul[0]){
            resul[0] = max_min
        }
        if(max_min > resul[1]){
            resul[1] = max_min
        }
    })
    return resul
}
// Ejercicio To Do List
let input = "" //Declaro variable de entrada para la accion.
let tareas = [] // Declaro array tareas
while(input !== "quit"){  // loop pára que sga pidiendo la accion hasta que se digite salir
    input = prompt("Que acccion deseas realizar: 'new', 'list', 'delete', 'quit'") // Pide la accion a realizar al usuario
    switch (input) { // Switch quie selecciona el tipo de accion a realizar
        case "new":
            tareas = insertarElemento(tareas) // Llama la funcion que ingresa una nueva tarea a mi array tareas
            break;
        case "list":
            mostrarArreglo(tareas)  // LLama la funcion que muestra las tareas
            break;
        case "delete":
            tareas = borrarElemento(tareas) // Lama la funcion que elimina un elemento
            break;
        case "quit":
            console.log("La APP se ha cerrado!, Adios!") //input toma el valor de 'quit' lo que rompe el ciclo while muestra en consola
            break;
        default:
            alert("Opcion invalida!")
            break;
    }
}
function mostrarArreglo(Arreglo){ // Funcion para mostrar los elemntos de array tareas No retorna nada
    if(Arreglo.length > 0){ 
        console.log("-----------------------------")
        for(let i = 0; i < Arreglo.length; i++){
            console.log(i + " : " + Arreglo[i])
        }                
        console.log("-----------------------------")
    }else{
        console.log("No hay elementos que mostrar.")
    }
}
function insertarElemento(Arreglo){ // Funcion que ingresa una nueva tarea y retorna un array que se asigna a tareas en el mismo llamado a la funcion
    Arreglo.push(prompt("Digita la nueva tarea"))
    return Arreglo
}
function borrarElemento(Arreglo){ // Funcion que borra una tarea y retorna un array que se asigna a tareas en el mismo llamado a la funcion
    let Index = Arreglo.indexOf(prompt("Digita la tarea a eliminar"))
    if(Index >= 0){
        Arreglo.splice(Index, 1)
        console.log("Tarea eliminada con exito")
    }else{
        console.log("La tarea no existe")
    }
    return Arreglo
}