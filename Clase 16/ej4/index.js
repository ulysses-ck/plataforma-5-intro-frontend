alert("PENDIENTE")
let divCont = "<div class='container'></div>"
let imgsFunny = "<h5>1 Touch Img</h5><img src='https://images7.memedroid.com/images/UPLOADED749/5ef85c9c90211.jpeg'><h5>2 Touch img</h5><img src='https://images3.memedroid.com/images/UPLOADED105/5c535c93dcfa1.jpeg'><h5>Touch img</h5><img src='https://pics.me.me/a-veces-mi-c%C3%B3digo-se-ve-as%C3%AD-no-se-lo-59681545.png'>"
$("body").prepend(divCont).css("fontFamily", "Consolas")
$(".container").append(imgsFunny)  
$("img").css({
    width: 255 + "px",
    height: 144 + "px"
})
$("img").css({
    width: 720 + "px",
    height: 380 + "px",
    border: "solid black 1px",
    margin: 5 +"px"
});
$("img").fadeOut()
$("img").slideDown("1000")
$("img").on("click", function(){
    $("img").slideToggle("2000").fadeIn()
})
let arrElements = $(".container")[0].children
for (let i = 0; i < arrElements.length; i++) {
    console.log(arrElements[i])
}
// Empieza con un HTML vacío, que tenga incluido a jQuery.
// Pon un segundo tag <script> en la página para que contenga tu propio código JavaScript
// Usa jQuery para crea un nuevo tag <div> con el id container y agregalo al body
// Usa jQuery para crear una nueva tag <img> y ponela dentro de #container
// Dale a la imagen un atributo src que direccione a una imagen graciosa
// Usa jQuery para hacer que la imagen sea muy chica
// Ahora hazla bien grande
// Ahora agréga algunas imágenes más y algo de texto, y utilizá los efectos de jQuery para que se muevan!
// Usa Math.random() y position:fixed para randomizar la posición de todos los elementos HTML de tu página. Cada véz que recargues la página deberías ver las cosas en lugares distintas. window.innerHeight y window.innerWidth te serán útiles.