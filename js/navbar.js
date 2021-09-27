const nav = document.getElementById("navbar");

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
};

//"ABET-Accredited Programs": "abet_programs.html", //Todo integrate abet with program offerings

const login_forms = {
    "Library": "https://library.tip.edu.ph/",
    "T.I.P. E-mail": "https://tip.edu.ph/mail.php",
    "ARIS": "https://tip.edu.ph/aris/"
};

function add_links(list) {
    // Adds nav bar links based on the "pages" object
    Object.keys(list).forEach(name => {
        const href= pages[name];
        nav.innerHTML += `<a href=${href}>${name}</a>`;
    })
}

/* nav.innerHTML += `
    <div>
        Login:
        <br>
        <a href="https://library.tip.edu.ph/" target=_blank>LIBRARY</a>
        <a href="https://tip.edu.ph/mail.php" target=_blank>T.I.P. EMAIL</a>
        <a href="https://tip.edu.ph/aris/" target=_blank>ARIS</a>
    </div
`  */

// Adds the ff: Logo, site links, and login forms
nav.innerHTML += "<img src=media/logo.png>"
add_links(pages);
nav.innerHTML += "Login: <br>";
add_links(login_forms);
