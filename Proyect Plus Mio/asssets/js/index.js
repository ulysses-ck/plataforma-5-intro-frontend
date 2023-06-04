let delayEnMilisegundos = 100;
let startBtn = $("#start"),
    stopBtn = $("#stop"),
    restartBtn = $("#restart"),
    cr_visible = $(".functions"),
    cronometroBtn = $("#initCrono");
let styleVisible = { display: "inline-block" },
    styleOculto = { display: "none" };
cronometroBtn.on("click", initCrono);
let h = 00,
    m = 00,
    s = 00,
    milSec = 000;
let cronoAlt, hAux, mAux, sAux, milSecAux;

function reloj() {
    fechaActual = new Date();
    (hora = fechaActual.getHours()),
        (minuto = fechaActual.getMinutes()),
        (segundos = fechaActual.getSeconds()),
        (miliSegundos = fechaActual.getMilliseconds());
    horaParaMostrar = `${hora} : ${minuto} : ${segundos} : ${miliSegundos} <br> `;
    $("#horaPMostrar").html(horaParaMostrar);
    setTimeout("reloj()", delayEnMilisegundos);
}
function initCrono() {
    startBtn.on("click", cronometrar);
    restartBtn.on("click", restart);
    stopBtn.on("click", stop);
    (h = 00), (m = 00), (s = 00), (milSec = 000);
    $(".cronoMostrar").text(`${h} : ${m} : ${s} : ${milSec}`);
    cr_visible.css(styleVisible);
    startBtn.css(styleVisible);
}
function cronometrar() {
    reescribir();
    cronoAlt = setInterval(reescribir, 25);
    startBtn.off("click", cronometrar);
    startBtn.css(styleOculto);
    restartBtn.css(styleVisible).toggleClass("disabled").off("click", restart);
    stopBtn.css(styleVisible);
}
function reescribir() {
    milSec += 25;
    if (milSec > 999) {
        s++;
        milSec = 000;
    }
    if (s > 59) {
        m++;
        s = 0;
    }
    if (m > 59) {
        h++;
        m = 0;
    }
    if (h > 24) {
        h = 0;
    }

    if (milSec < 10) {
        milSecAux = "0" + s;
    } else {
        milSecAux = milSec;
    }
    if (s < 10) {
        sAux = "0" + s;
    } else {
        sAux = s;
    }
    if (m < 10) {
        mAux = "0" + m;
    } else {
        mAux = m;
    }
    if (h < 10) {
        hAux = "0" + h;
    } else {
        hAux = h;
    }

    $(".cronoMostrar").text(`${hAux} : ${mAux} : ${sAux} : ${milSecAux}`);
}
function restart() {
    clearInterval(cronoAlt);
    $(".cronoMostrar");
    (milSec = 0), (s = 0), (m = 0), (h = 0);
    startBtn.on("click", cronometrar).text("Comenzar").css(styleVisible);
    stopBtn.css(styleOculto);
    restartBtn.css(styleOculto).addClass("disabled");
    $(".cronoMostrar").text(`${h} : ${m} : ${s} : ${milSec}`);
}
function stop() {
    clearInterval(cronoAlt);
    startBtn.on("click", cronometrar);
    startBtn.text("Retomar").css(styleVisible);
    stopBtn.css(styleOculto);
    restartBtn.removeClass("disabled").on("click", restart);
}
