const atributesBtn = document.getElementById("atributes-open")

atributesBtn.addEventListener("click", () => {
    let main = document.getElementById("atributes-main")

    main.classList.toggle("notActive")
})