console.log(`Este es el ejrcicio 5`)
let miEdad = prompt('Cual es tu edad');
const edadMaximaEstimada = prompt('Estimá tu edad máxima (es feo, pero a todos nos va a pasar).');
let snackFav = prompt('Cual es tu snack favorito');
let numSnacks = 25;
let añosRest = edadMaximaEstimada - miEdad;
let snackPorComer = añosRest*numSnacks;
alert('Vas a necesitar de ' + snackFav + ', ' + snackPorComer + ' para que te alcancen a los ' + edadMaximaEstimada);
let precioSnack = 65;
let gastoDeSnack = snackPorComer * parseFloat(precioSnack);
alert('Te vas a gastar $' + gastoDeSnack);
alert('Bye');