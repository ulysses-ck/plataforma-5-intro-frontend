$.getJSON("https://api.chucknorris.io/jokes/random",
    function (data) {
        $("h2.phrase").text(data.value)
    }
);
$("#update").on("click", update)
function update() {
    $.getJSON("https://api.chucknorris.io/jokes/random",
    function (data) {
        $("h2.phrase").text(data.value)
        console.log("tic")
    })
}