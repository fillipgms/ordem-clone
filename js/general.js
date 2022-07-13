let buttons = document.querySelectorAll('.open-close');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.children[0].classList.toggle("closed")
    });
});

const PericiasMain = document.getElementById("pericias-quick-main")
var empty = true
const checkbox = document.querySelectorAll(".pericia-checkbox")
const warning = document.getElementById("warning")

checkbox.forEach(box => {
    let container = box.nextElementSibling
    container.classList.add("content")
    let clone = container.cloneNode(true)

    box.addEventListener('click', () => {
        if (box.checked) {
            empty = false
            PericiasMain.appendChild(clone)
        } else {
            PericiasMain.removeChild(clone)

            if (PericiasMain.children.length <= 1) {
                empty = true
            }
        }

        if (empty != true) {
            PericiasMain.classList.add("grid")
            warning.style.display = "none"
        } else {
            PericiasMain.classList.remove("grid")
            warning.style.display = "block"
        }
    });
});