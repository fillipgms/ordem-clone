const maxOcultism = 25
var oculstimo = 25

const addOculstism = document.getElementById("addOculstism")
const removeOcultism = document.getElementById("removeOcultism")

addOculstism.addEventListener("click", () => {
    if (oculstimo >= maxOcultism) {
        oculstimo = maxOcultism
    } else {
        oculstimo++
    }

    document.getElementById("ocultismo-counter").innerHTML = oculstimo
    document.getElementById("purple-ocultismo").style.width = (oculstimo / 25) * 100 + "%";
})

removeOcultism.addEventListener("click", () => {
    oculstimo--

    if (oculstimo < 0) {
        oculstimo = 0
    }

    document.getElementById("ocultismo-counter").innerHTML = oculstimo
    document.getElementById("purple-ocultismo").style.width = (oculstimo / 25) * 100 + "%";

})