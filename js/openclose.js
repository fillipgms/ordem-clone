const atributesBtn = document.getElementById("atributes-open")
const periciasBtn = document.getElementById("pericias-open")
const periciasAcessBtn = document.getElementById("pericias-quick-open")
const combateBtn = document.getElementById("combate-open")

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

periciasAcessBtn.addEventListener("click", () => {
    let main = document.getElementById("pericias-quick-main")

    main.classList.toggle("notActive")
})

combateBtn.addEventListener("click", () => {
    let main = document.getElementById("combate-main")
  
    main.classList.toggle("notActive")
})