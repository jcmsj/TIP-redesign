// Get default shown content.
//Strict: Set active attribute for only one of the section tags.
var displayed = document.activeElement.querySelector("section");

const section = document.getElementById("section-handler");

// Get the children of the section-handler
const options = document.querySelectorAll("option");

// Shows which section is currently viewed.
const summary = document.querySelector("summary");

function close() {
  section.removeAttribute("open");
}

function open() {
  section.setAttribute("open", true);
}

options.forEach((option) => {
  //Changes the displayed content when the user clicks an option.
  option.addEventListener("click", (e) => {
    summary.innerText = option.innerText;
    displayed.toggleAttribute("active");
    displayed = document.getElementById(option.value);
    displayed.toggleAttribute("active");
    close();
  });
});

section.addEventListener("mouseout", close);
section.addEventListener("mouseover", open);

summary.addEventListener("click", () => {
  section.toggleAttribute("open");
});
