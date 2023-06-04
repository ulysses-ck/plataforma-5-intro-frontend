console.log('%c Ej1', 'color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white')


let nave ={
    "tipo de nave" : "espacial",
    "pais" : "EE UU",
    "cantidad de tripulantes" : 11,
    tripulantes : ["MArco1", "MArco2", "MArco3", "MArco4", "MArco5", "MArco6", "MArco7", "MArco8", "MArco9", "MArco10", "MArco11"],
    estado : "usada",
    despegar : function(){console.log("Despegue en 3, 2, 1 … OH NO, ESPEREN, ALGO SE ROMPIÓ!")
    alert("BOOM!!!!!!!")
    }
}

nave.pais

nave["tipo de nave"]

nave["cantidad de tripulantes"]

let cantTrip = nave["cantidad de tripulantes"]
let test = "estado"
nave.test
nave[test]
nave[test]

nave.despegar()

console.log('%c Ej2', 'color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white')

let objeto_demo = {
    uno: 1,
    dos: 2,
    tres: 3
}
let uno = "tres"
objeto_demo['dos'] // Devuelve 2
objeto_demo[uno] // Devuelve 3 xq uno esta declarada con el string tres y es la propiedad de objeto_demo
let capitales = {
    Argentina: 'Buenos Aires',
    Uruguay: 'Montevideo'
}
let lugar = 'Argentina'
capitales['lugar'] // undefined
capitales.lugar   // undefined
capitales[lugar] // Buenos Aires
capitales['Argentina'] // Buenos Aires
capitales.Argentina   // Buenos Aires
// capitales[Argentina]
// undefined Error

console.log('%c Ej3', 'color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white')


let posts =[
{
    usuario: "guilleasz",
    postContent: "Cada objeto es un post distinto",
    comments: [{
    username: "santiscanlan",
    commentContent: "Gran post!"
    }, {
        username: "toniTralice",
        commentContent:"Malisimo post!"
    }
    ]
},
{
    usuario: "tonitralice",
    postContent: "y estan todos ordenados dentro del arreglo",
    comments: [{
    username: "guilleasz",
    commentContent: "ya me quede sin ideas de comentarios"
    }, {
        username: "toniTralice",
        commentContent:"Si yo también"
    }
    ]
}
]
posts[0] // ??
posts[0].username // ??
posts[1].comments // ??
posts[1].comments[0] // ??
posts[1].comments[0].commentContent // ??

posts[0]["usuario"] //1 guileasz
posts[0]["comments"][0].commentContent//2 gran Post !! 
posts[0]["comments"][0].username//3 "santiscanlan"
posts[0]["comments"][1].commentContent//4 "Malisimo post!"
posts[1]["postContent"]//5 "y estan todos ordenados dentro del arreglo"
posts[1]["comments"][1].username//6 "toniTralice"

console.log('%c ej4', 'color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white')


let nuevaHeroina = {
    nombreAvenger: 'capitana marvel',
    nombreHumano: 'carol danvers',
    poder: 'ser archi fuerte y volar por el espacio',
}
for (let propiedad in nuevaHeroina) {
    console.log(propiedad) // en cada iteración vamos a mostrar el "nombre" de cada una de las propiedades del objeto
}
for (let propiedad in nuevaHeroina) {
    console.log(nuevaHeroina[propiedad]) // en cada iteración vamos a mostrar el "valor" de cada una de las propiedades del objeto
}

console.log('%c Ej5', 'color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white')

const mi_auto = {}//Objeto mi_auto

mi_auto.marca = "Dodge"//propiedad marca
mi_auto.year = 1993//propiedad año
mi_auto.nuevo = true//propiedad nuevo
let property_key = "modelo"//variable donde guarda prop modelo
mi_auto[property_key] = "Unknown(XD)"//Si pusiese con comillas property_key, la propiedad toma como un string property_key y lo guarda como propiedad el mismo
let anotherPropertyKey = "precio"//variable donde guarda prop precio
mi_auto[anotherPropertyKey] = "$" + 52900//Creo la propiedad a partir de la variable 
console.log(mi_auto[property_key])//Devuelve el valor del objeto
console.log(mi_auto["property_key"])//Devuelve el indefinido
console.log(mi_auto["modelo"])//Devuelve el valor del objeto
let next_property = "color"//variable donde guarda prop color
mi_auto[next_property] = "red"//Creo la propiedad y agrego el valor a la misma
console.log(mi_auto[next_property])// Devuelve red
console.log(mi_auto["color"])// Devuelve red

let num = 1//variable para que aumente acorde a cada propiedad

for(let prop in mi_auto){
    console.log(prop + " Esta es la propiedad " + num)
    console.log(mi_auto[prop] + " Este es el valor " + num)
    num++
}

console.log('%c Ej6', 'color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white')
alert("Ej6")

let numeros = [2, 4, 5, 37, 0]
let numeros_duplicados = {}

// despues deberia quedar así { 0: 0, 2: 4, 4: 8, 5: 10, 37: 74}

for( let i = 0; i < numeros.length; i++) {
    console.log("valor del indice i es: " + i)
    numeros_duplicados[numeros[i]] = Number(numeros[i]) * 2// Agregue el number porque sino me devolovía undefined en el 0 y 37, los demas tampoco daban resultados exactos. En cambio con el number resulto bien Nose porque

    console.log("valor dentro del indice " + i + " es: " + numeros[i])
}
num = 1

for(let prop in numeros_duplicados){
    console.log(prop + " Esta es la propiedad " + num)
    console.log(numeros_duplicados[prop] + " Este es el valor " + num)
    num++
}

console.log('%c Ej7', 'color: rgba(8, 7, 59, 0.739); font-family: Consolas; background-color: white')
alert("Ej7")

let favorites = []
let famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt', 'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis']
let obama_jobs = []
let politicos = {
  secretary_of_state: 'hillary clinton',
  potus: 'barack obama',
  flotus: 'michelle obama',
  vice_prez: 'joe biden',
  gov_of_california: 'jerry brown'
}

for (let i = 0; i < famous.length; i++) {//Iteracion para agregar los nombres con a
    if(famous[i][0] === "a" ){
        console.log(`Empieza con a el nombre ${famous[i]}`)
        favorites.push(famous[i])
    }else{
        console.log(`Empieza con otra letra el nombre ${famous[i]}`)
    }
    
}

for (const prop in politicos) {//Itere sobre el objeto y hice push en el array
    famous.push(politicos[prop])
}

for (const prop in politicos) {//Itere sobre el objeto y hice push en el array
    obama_jobs.push(prop)
}
let b_named_politicos = {}

for (const prop in politicos) {
    politicos[prop].split(" ")
    console.log(politicos[prop].split(" ")[0] + " " + politicos[prop].split(" ")[1])

}