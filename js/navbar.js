const nav = document.getElementById("navbar-container");
let expanded = false;
// An object to store all page names and their respective links
const pages = {
    "Home":"index.html",
    "About T.I.P.": "about.html",
    "Admissions": "admissions.html",
    "Program Offerings": "programs.html",
    "ABET-Accredited Programs": "ABET_accredited_programs.html",
    "T.I.P. TechnoCoRe": "https://technocore.tip.edu.ph/",
    "T.I.P. Career Center": "https://careercenter.tip.edu.ph/",
    "News": "news.html",
    "Contact Us": "contacts.html",
};

const login_forms = {
    "Library": "https://library.tip.edu.ph/",
    "T.I.P. E-mail": "https://tip.edu.ph/mail.php",
    "ARIS": "https://tip.edu.ph/aris/"
} 


function add_links(list, _class = "") {
    // Adds nav bar links based on the "pages" object
    let code = "";
    for (let name in list) {
        const href = list[name];
        code += `<a href="${href}" ${(_class == "") ? "": _class}>${name}</a>`;
    }
    return code;
}

// Adds the Logo, site links, and login forms to the nav bar.
nav.innerHTML += `
    <div id="navbar">
        <img src=media/logo.png> 
        ${add_links(pages)}
        <hr>
        ${add_links(login_forms)}
    </div>
    `;

function reveal_or_hide() {
    nav.toggleAttribute("active");
}

const mobile_nav = document.getElementById("mobile-nav");

mobile_nav.addEventListener("click", reveal_or_hide)

document.addEventListener('click', e => {
    e = e || window.event;
    if (!(e.target.id.search("navbar-container|mobile-nav") > -1) && nav.hasAttribute("active")) {
        reveal_or_hide();
    }
}, false);


