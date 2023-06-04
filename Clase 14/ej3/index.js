let body = document.querySelector("body")
let image = document.querySelector("img#image")
body.addEventListener("mousemove", function(infoEvento){
    image.style.top = infoEvento.clientY + "px"
    image.style.left = infoEvento.clientX + "px"
    
})