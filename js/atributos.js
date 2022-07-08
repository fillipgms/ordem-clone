const atributesBtn = document.getElementById("atributes-open")
const periciasBtn = document.getElementById("pericias-open")

periciasBtn.addEventListener("click", () => {
    let main = document.getElementById("pericias-main")

    main.classList.toggle("notActive")
})

atributesBtn.addEventListener("click", () => {
    let main = document.getElementById("atributes-main")
    let atributes = document.getElementById("atributes")

    atributes.classList.toggle("closed")
    main.classList.toggle("notActive")
})