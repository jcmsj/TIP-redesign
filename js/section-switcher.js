// Default shown content; Strict: Set active attribute for one of the section tags
var displayed = document.activeElement.querySelector("section");

const sec = document.getElementById("section-handler");

// This options are children of the section-handler
const options = document.querySelectorAll("option");

// Shows which section is currently viewed.
const summary = document.querySelector("summary");

function close() {
    sec.removeAttribute("open");
}

function open() {
    sec.setAttribute("open", true);
}

//When user clicks an option, the displayed content is changed
options.forEach( option => {
    option.addEventListener("click", e => {
        summary.innerText = option.innerText;
        displayed.toggleAttribute("active");
        displayed = document.getElementById(option.value);
        displayed.toggleAttribute("active");
        close();
    })
})

sec.addEventListener("mouseout", close);
sec.addEventListener("mouseover", open);

summary.addEventListener("click", () => {
    sec.toggleAttribute("open");
})