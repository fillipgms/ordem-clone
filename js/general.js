const button = document.querySelectorAll(".open-close")
const icon = document.querySelectorAll(".arrow-icon")

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        for (let i = 0; i < icon.length; i++) {
            icon[i].classList.toggle("fa-angle-down")
            icon[i].classList.toggle("fa-angle-up")
        }
    });
}