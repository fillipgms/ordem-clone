const table = document.getElementById("tableData")
const addRowbtn = document.getElementById("addData")
var counter = 0;
let nomeInput = document.getElementById("nomeInput")

addRowbtn.addEventListener("click", () => {
    let inputs = document.getElementById("inputs")
    inputs.classList.toggle("active")
})

function addRow() {
    let nome = document.getElementById("nomeInput").value
    let tipo = document.getElementById("tipoInput");
    let option = tipo.options[tipo.selectedIndex].text;
    let dano = document.getElementById("danoInput").value
    let munMin = document.getElementById("munMinInput").value
    let munMax = document.getElementById("munMaxInput").value
    let ataque = document.getElementById("ataqueInput").value
    let alcance = document.getElementById("alcanceInput").value
    let defeitos = document.getElementById("defeitosInput").value
    let area = document.getElementById("AreaInput").value

    counter += 1

    let template = `
            <tr id="row${counter}" class= "rows">
                <td>
                    <button id="${counter}" onclick= "removeRow(this)"><i class="fa-solid fa-trash"></i></button>
                    ${nome}
                </td>
                <td>${option}</td>
                <td>${dano}</td>
                <td>${munMin}</td>
                <td>${munMax}</td>
                <td>${ataque}</td>
                <td>${alcance}</td>
                <td>${defeitos}</td>
                <td>${area}</td>
            </tr>
    `

    table.innerHTML += template
    let inputs = document.getElementById("inputs")
    inputs.classList.toggle("active")
}

function removeRow(button) {
    let number = button.id
    let row = document.getElementById("row"+number)
    row.remove()
}

nomeInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("send").click();
    }
});