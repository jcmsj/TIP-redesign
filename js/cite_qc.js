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

sec.addEventListener("mouseout", close)
sec.addEventListener("mouseover", e => {
    sec.setAttribute("open", true)
})