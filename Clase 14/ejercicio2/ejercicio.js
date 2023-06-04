let pes = document.querySelectorAll("p")

for (let i = 0; i < pes.length; i++) {
    pes[i].addEventListener("click", function(){
        this.classList.toggle("resaltado")
    })
}
//alt + 91(teclado numerico) para corchetes.

