console.log($(".importante"))
console.log($("#especial"))
console.log($("img"))
console.log($("li > a"))
$("h1").css("color", "yellow")
// let styles = {
//     backgroundColor: "pink",
//     color: "#fafafa",
//     border: "2px solid red"
//   }
// $("#especial").css(styles)
$("#especial").css({
    backgroundColor: "pink",
    color: "#fafafa",
    border: "2px solid red"
})
console.log($("img").css("width"))
$("li").css("color", "yellow")
$("p").text("Lorem le cambié")
$("li").css("backgroundColor", "blue")
$("li").text("Lorem le cambié y el link lo quité")
console.log($("ul").html()) // nos devuelve el html
console.log($("ul").text())// Nos devuelve solo el texto
$("ul").html("<li>Ahora cambiamos el html de ese ul </li>")
$("ul").text("<li>Ahora cambiamos el html de ese ul </li>")
$("p").prepend("Hola yo iré al principio del parrafo")
$("ul").append("<li> Agrego elementos al final de la liste </li>")
$("img").attr("src") //Nos devuelve el src de la imagen
//Ahora podemos cambiar ese atributo
$("img").attr("src", "https://cdn.meme.am/instances/50427098.jpg")
// Podemos hasta cambiar el atributo type del input
$("input").attr("type") // "text"
$("input").attr("type", "color")
$("input").val() //Nos devuelve el valor
$("input").val("Este es el nuevo valor")//No lo toma porque no es el valor esperado
$("input").val("#FF7F50")//Recibe la propiedad color solo rgb!!!!!! Hex Code #RRGGBB
console.log(`Recibe la propiedad color solo rgb!!!!!! Hex Code #RRGGBB`)
$("li").addClass("incorrecto")
$("li").removeClass("incorrecto")
$("li").toggleClass("incorrecto")