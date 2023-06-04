let buttons = document.querySelectorAll("div.card button");
let images = document.querySelectorAll("div.card img");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        images[i].classList.toggle("oculto");
    });
    images[i].addEventListener("click", function () {
        this.classList.add("oculto");
    });
}
