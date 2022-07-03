const maxLife = 51
var vida = 51

const addLife = document.getElementById("addlife")
const removeLife = document.getElementById("removeLife")

addLife.addEventListener("click", () => {
    if (vida >= 51) {
        vida = 51
    } else {
        vida++
    }

    document.getElementById("vida-counter").innerHTML = vida
    document.getElementById("red-life").style.width = (vida / 51) * 100 + "%";

    if (morrendo.checked == true) {
        document.getElementById("morrendo").checked = false;
    }
})

removeLife.addEventListener("click", () => {
    vida--

    if (vida < 0) {
        vida = 0
    }

    document.getElementById("vida-counter").innerHTML = vida
    document.getElementById("red-life").style.width = (vida / 51) * 100 + "%";

    if (vida === 0) {
        morrendo.checked = true;
    }
})