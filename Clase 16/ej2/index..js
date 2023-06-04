function iniciar() {
    let newDiv = $("<div class='important'>")
// Creamos nun elemento html y lo guardamos en una varible
// Notá la diferencia de $("div") a lo que hicimos arriba
// Al agregarle los < > estamos indicando que es un nuevo elemento
newDiv.css("color", "red").attr("id", "primary").text("Hola, soy nuevo aquí")
// Todavía no lo vemos en la página..
// Eso es porque solo creamos el objeto pero no lo colocamos en nuestro DOM
//Como vemos también estamos usando un encadenamiento de métodos (method chaining)
/* Esto lo hacemos gracias a que cada vez que corremos un metodo, jQuery
nos devuelve el elemento HTML como valor de retorno de cada método que
invocamos por lo tanto podemos invocar otro método sobre él. Mirá lo que retorna
en la consola cada vez que ejecutamos un metodo de jQuery.
*/
// Bueno el momento de la verdad, agreguemos el elemento a la página
$("body").append(newDiv)
// También podemos encadenar efectos sobre un mismo elemento
//Que va a hacer este código??
newDiv.fadeOut(2000).delay(1000).fadeIn().slideUp(4000)
}
$("button.btn").on("click", iniciar)