let ciudad = $("input#enviarInput")//Guarda la var que contiene el input. Si en esta linea llamo a val(), devuelve nada porque en el momento no tiene nada
$("button#enviar").on("click", function() {
    console.log("click")
    console.log(ciudad.val())
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad.val() + "&appid=95176c8edea30e33338e0eaddd53a916", function (data) {
        console.log(data)//TEST
        const tempCelsius = data.main.temp - 273.15//Var que contiene la temperatura actual convertida a Celsius, según la formula correspondiente
        const temp_minCelsius = data.main.temp_min - 273.15//Var que contiene la temperatura minima convertida a Celsius, según la formula correspondiente
        const temp_maxCelsius = data.main.temp_max - 273.15//Var que contiene la temperatura maxima convertida a Celsius, según la formula correspondiente
        console.log(temp_minCelsius)
        console.log(temp_maxCelsius)
        console.log(tempCelsius)//TEST
        console.log(data.weather[0].icon)//Test
        const imgIcon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"//var que contiene el img icon devuelto por la api concatenado a la url
        
        $("#ciudad").text(data.name)
        $("#temperatura").text((tempCelsius).toFixed(2))//to fixed hace que tenga minimo dos decimales
        $(".grados").html("<sup>°C</sup>")
        $("#wicon").attr("src", imgIcon)
        $("#descripcion").text(data.weather[0].description)
        ciudad.val("")
        }
    );
    document.querySelector(".container").style.visibility = "visible"

})