const nav = document.getElementById("navbar");
const navContainer = document.getElementById("navbar-container");

// An object to store all page names and their respective links
const pages = {
    "Home":"index.html",
    "About T.I.P.": "about.html",
    "Admissions": "admissions.html",
    "Program Offerings": "programs.html",
    "T.I.P. TechnoCoRe": "https://technocore.tip.edu.ph/",
    "T.I.P. Career Center": "https://careercenter.tip.edu.ph/",
    "News": "news.html",
    "Contact Us": "contacts.html",
    "--":"",
    "Library": "library.tip.edu.ph/",
    "T.I.P. E-mail": "https://tip.edu.ph/mail.php",
    "ARIS": "https://tip.edu.ph/aris/"
};

//"ABET-Accredited Programs": "abet_programs.html", //Todo integrate abet with program offerings

function add_links(list) {
    // Adds nav bar links based on the "pages" object
    let code = "";
    Object.keys(list).forEach(name => {
        if (name == "--") {
            code +="<hr>"
        } else {
        const href = pages[name];
        code += `<a href="${href}">${name}</a>`;
        }
    })
    return code;
}

// Adds the Logo, site links, and login forms to the nav bar.
nav.innerHTML += `<img src=media/logo.png> ${add_links(pages)}`

const mobile_nav = document.getElementById("mobile-nav");
mobile_nav.addEventListener("click", () => {
    navContainer.toggleAttribute("active");
})
