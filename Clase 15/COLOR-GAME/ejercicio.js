let numberOfSquares = 6
let colors = []
let $pickedColor
let $clickedColor
let $square = document.querySelectorAll(".square")
let $spanMessage = document.querySelector("#message")
let $tittleHUno = document.querySelector("#colorDisplay")
let $backBody = document.querySelector("body").style.backgroundColor
let $hUno = document.querySelector("h1")
let $resetBtn = document.querySelector("#reset")
let $btnModes = document.querySelectorAll('.mode')

init()

function init() {
    setBtn()
    setSquare()
    reset() 
}
function setSquare() {
    for (let i = 0; i < $square.length; i++) {
        $square[i].style.backgroundColor = colors[i]
        console.log($square[i] + " " + colors[i])
        $square[i].addEventListener("click", function(){
            $clickedColor = this.style.backgroundColor
            console.log($clickedColor)
            if($clickedColor === $pickedColor){
                $spanMessage.textContent = "CORRECTO"
                $hUno.style.backgroundColor = $clickedColor
                changeColor($clickedColor)
                $resetBtn.textContent = "Juega de Nuevo"                
            }else{
                $square[i].style.backgroundColor = $backBody 
                $spanMessage.textContent = "INTENTA DE NUEVO"
            }
        })
    }
}

function setBtn() {
    for (let i = 0; i < $btnModes.length; i++) {
        $btnModes[i].addEventListener("click", function (){
            $btnModes[0].classList.remove("selected")
            $btnModes[1].classList.remove("selected")
            this.classList.add("selected")
            numberOfSquares = (this.textContent === "EASY")?3:6
            reset()   
        })
        
    }
}

function reset(){
    colors = generateRandomColors(numberOfSquares)
    $pickedColor = pickColor()
    console.log($pickedColor)
    $tittleHUno.textContent = $pickedColor
    for (let i = 0; i < $square.length; i++) {
        if(colors[i]){
            $square[i].style.transition = "1s"
            $square[i].style.background=colors[i]
            $square[i].style.display="block"
        }else{
            $square[i].style.transition = "1s"
            $square[i].style.display="none"
        }
    }
    $spanMessage.textContent=""
    $resetBtn.textContent="Nuevos COLORES "
}

$resetBtn.addEventListener("click", function(){
    reset()
})

function changeColor(color) {
    for (let i = 0; i < $square.length; i++) {
        $square[i].style.backgroundColor = color        
    }
}
function pickColor() {
    random = Math.floor(Math.random() * colors.length)
    console.log(random)
    return colors[random]
}
function randomColor() {
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}
function generateRandomColors(num) {
    arr = []
    for (let i = 0; i < num; i++) {
        arr[i] = randomColor()       
        console.log(arr[i])
    }
    return arr
}