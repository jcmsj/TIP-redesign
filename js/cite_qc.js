const nav2 = document.getElementById("nav2");

const sub_links = {
    "Outcomes-Based Education":"#OBE",
    "Program Certification":"#PC",
    "Associate in Computer Technology": "#ACT",
    "Computer Science": "#CS",
    "Information System":"#IS",
    "Information Technology": "#IT"
};

let displayed = document.querySelector("#OBE");

nav2.innerHTML += add_links(sub_links);

document.querySelectorAll("#nav2 a").forEach( (item, i) => {
    item.addEventListener("click", e => {
        displayed.toggleAttribute("active")
        for (let key in sub_links) {
            let val = sub_links[key]
            if (item.href.search(val) > -1) {
                displayed = document.querySelector(val);
                displayed.toggleAttribute("active");
                return;
            }
        }
    })
})