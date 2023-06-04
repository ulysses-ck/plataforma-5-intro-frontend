
//$("li").click(function(){$(this).toggleClass("completado")})Agredá una clase dónde tacha el li y cambia el color
$("ul").on("click", "li", function(){
    $(this).toggleClass("completado")
  });
// $("span").click(function(event) {
//   $(this).parent().fadeOut(500, function(){
//   $(this).remove();
//   });
//   event.stopPropagation();
// })Esta sentencia hace que cuando se haga click en un span y solo en un span desapareszca y lo elimina fisicamente.
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
    event.stopPropagation();
  });
// Agregar el contenido del input a la lista
$("input[type='text']").keypress(function(event){
    //filtrar para que sólo se active cuando aprietan Enter
    if(event.key == "Enter") {
      $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ $(this).val() + "</li>");
      // se borra el contenido del input
      $(this).val("");
      event.stopPropagation();
    }
  });
//En un principio esta sentencia no tenía la linea que agrega el btn borrar y tampoco tienen las funciones anteriores de esta
$(".fa-arrows-v").click(function(){
    $("input").slideToggle()
})
