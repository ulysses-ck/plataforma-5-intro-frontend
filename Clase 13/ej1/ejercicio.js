console.log('%c Ej1', 'color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white')

let $divDom = document.querySelector("div")

$divDom.classList.add("square")
$divDom.classList.remove("square")
// setInterval(() => {
//     $divDom.classList.toggle("square")
//     console.log($divDom.classList)
// }, 1000);

// LAG o crashea el navegador, seguro

console.log('%c Ej2', 'color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white')

console.log(document.querySelector("p").textContent)
console.log(document.querySelector("p").textContent="Nothing")
console.log(document.querySelector("h1").textContent = "Pagina Nueva")
console.log(document.querySelector("h1").innerHTML)
console.log(document.querySelector("h1").textContent)
console.log(document.querySelector("div.jumbotron p.cambiar").classList.add("square") + " Esto tambien lo cmabie")
console.log(document.querySelector("div.jumbotron p.cambiar").textContent = "Lo cambie")

console.log('%c EJ3', 'color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white')

let source = document.querySelector("div#source").innerHTML
console.log(source)

let destination = document.querySelector("div#destination").innerHTML
console.log(destination + " SIN CAMBIAR")
destination = source
console.log(destination + " Cambiado")

let swap1 = document.querySelector("div#swap_1")
console.log(swap1.textContent + " ¡Este es swap 1")
let swap2 = document.querySelector("div#swap_2")
console.log(swap2.textContent + " ¡Este es swap 2")
let inter = swap1.textContent
console.log(inter  + " ¡Esta es la variable que guarda el swap 1")
swap1 = swap2.textContent
console.log(swap1  + " ¡Este es swap 2 dentro del swap 1")
swap2 = inter
console.log(swap2  + " ¡Este es swap 1 dentro del swap 2")

