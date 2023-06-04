let respuesta = ""
while(respuesta != "green" && respuesta != "red" && respuesta != "blue"){
    respuesta = prompt("QUE COLOR TE GUSTARIA(red blue or green, textual)")  
}
respuesta.toLowerCase()
switch (respuesta) {
    case "green":
        $("body").css({
            background: "#37f454",
            "font-family": "Consolas"
        })
        $("h1").css({
            color: "#17972e"
        })
        $("p").css({
            border: "9px solid #008000",
            color: "white"
        })
        alert("Se realizo con exito los cambios")
        break;
    case "blue":
        $("body").css({
            background: "#1818f3"
        })
        $("h1").css({
            color: "#151595"
        })
        $("p").css({
            border: "9px solid #0a0a4d",
            color: "white"
        })
        alert("Se realizo con exito los cambios")
        break;
    case "red":
        $("body").css({
            background: "#ff0808"
        })
        $("h1").css({
            color: "#740404"
        })
        $("p").css({
            border: "9px solid #6e090978",
            color: "white"
        })
        alert("Se realizo con exito los cambios")
        break;
    default:
        break;
}