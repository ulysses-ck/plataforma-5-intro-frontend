console.log(`Este es el ejrcicio 8-2`)
let precioProducto = prompt('Pone el precio del producto');
let cantidad = prompt('POne la cantidad que vas a llevar');
/*console.log(`
    El precio final es de $ ${precioProducto * cantidad}. Gracias por la compra
`)*/
//Las comillas invertidas `` permiten interpolar strings y operaciones de js, también soportan multiple línea: ${precioProducto * cantidad} devolvera los string concatenados porque el prompt devuelve el mismo, por eso se le debe aplicar parseFloat
console.log(`El precio final es de $ ${parseFloat(precioProducto) * parseFloat(cantidad)}. Gracias por la compra.
`);