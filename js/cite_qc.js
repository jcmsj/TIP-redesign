let displayed = document.getElementById("OBE");
const options = document.querySelectorAll("option")
const sec = document.getElementById("section-handler");
const summary = document.querySelector("summary");
options.forEach( option => {
    option.addEventListener("click", e => {
        summary.innerText = option.innerText;
        display()
        displayed = document.getElementById(option.value)
        display()
        close()
    })
})

function display() {
    displayed.toggleAttribute("active");
}

function close() {
    sec.removeAttribute("open");
}

function open() {
    sec.setAttribute("open", true)
}

sec.addEventListener("mouseout", close)
sec.addEventListener("mouseover", open)
summary.addEventListener("click", () => {
    sec.toggleAttribute("open")
})