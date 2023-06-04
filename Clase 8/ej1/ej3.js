console.log(`Este es el ej3`)
alert(`Este es el ej3`)
let x = 10
let y = "a"
console.log("En la primera parte retornará TRUE xq y != 'b', en cambio x si es igual que 10, entonces al tratarse de un OR una condicion debe ser verdadera")
console.log(y === "b" || x >= 10)



x = 3
y = 8
console.log('Aqui ya me canse y tarde en escribirlo XD. RETORNA FALSE PORQUE CONQUE UNA COMPARACION DE FALSE, TODO ES FALSE. EN ESTE CASO EN UN PRINCIPIO EL "OR" RETORNA FALSE')
console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y))


let str = ""
let msj = "jaja!"
let esGracioso = "false"
console.log("AQUI REALMENTE NO HAY MUCHO QUE DECIR. LOS STRINGS DEVUELVEN TRUE, AUNQUE AL FINAL SE NIEGA EL CONJUNTO O EL TODO")
console.log(!((str || msj) && esGracioso))