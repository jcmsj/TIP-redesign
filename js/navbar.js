const nav = document.getElementById("navbar");

// An object to store all page names and their respective links
const pages = {
    "Home":"index.html",
    "About T.I.P.": "about.html",
    "Program Offerings": "programs.html",
    "ABET-Accredited Programs": "abet_programs.html", //Todo integrate abet with program offerings
    "Admissions": "admissions.html",
    "T.I.P. TechnoCoRe": "https://technocore.tip.edu.ph/",
    "T.I.P. Career Center": "https://careercenter.tip.edu.ph/",
    "News": "news.html",
    "Contact Us": "contacts.html"
};

// Adds the company name in every page
        
nav.innerHTML += "<img src=media/logo.png>"

// Adds nav bar links based on the "pages" object
Object.keys(pages).forEach(name => {
    const href= pages[name];
    const title = document.title.toLocaleLowerCase();
    const _name = name.toLocaleLowerCase();
    const is_current = (title.search(_name) != -1) ? "id=current":"";

    nav.innerHTML += `<a href=${href} ${is_current}>${name}</a>`;
})