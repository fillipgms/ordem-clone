const button = document.querySelectorAll(".open-close")
const icon = document.querySelectorAll(".arrow-icon")
const morrendo = document.getElementById("morrendo")

morrendo.addEventListener("click", () => {
    let kaiser = document.getElementById("kaiser")
    kaiser.classList.toggle("morto")
})


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        for (let i = 0; i < button.length; i++) {
            icon[i].classList.toggle("closed")
        }
    });
}