const maxSanity = 50
var sanidade = 50

const addSanity = document.getElementById("addSanity")
const removeSanity = document.getElementById("removeSanity")

addSanity.addEventListener("click", () => {
    if (sanidade >= 50) {
        sanidade = 50
    } else {
        sanidade++
    }

    document.getElementById("sanidade-counter").innerHTML = sanidade
    document.getElementById("blue-sanidade").style.width = (sanidade / 50) * 100 + "%";
})

removeSanity.addEventListener("click", () => {
    sanidade--

    if (sanidade < 0) {
        sanidade = 0
    }

    document.getElementById("sanidade-counter").innerHTML = sanidade
    document.getElementById("blue-sanidade").style.width = (sanidade / 50) * 100 + "%";

})