let button = document.querySelector("button.beep")

button.addEventListener("click", clickFunction)

function clickFunction(){
    body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", "<p style='background:blue'>BEPP</p><br>")
    body.classList.toggle("color")
    console.log(document.querySelector("p").textContent + " lo cliqueaste!!")
}