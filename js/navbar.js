let expanded = false;

const nav = document.getElementById("navbar-container");
const mobile_nav = document.getElementById("mobile-nav");

// (1) An object to store all page names (key) and their respective URLs (value).
const pages = {
  Home: "index.html",
  "About T.I.P.": "about.html",
  Admissions: "admissions.html",
  "Program Offerings": "programs.html",
  "ABET-Accredited Programs": "ABET_accredited_programs.html",
  "T.I.P. TechnoCoRe": "https://technocore.tip.edu.ph/",
  "T.I.P. Career Center": "https://careercenter.tip.edu.ph/",
  News: "news.html",
  "Contact Us": "contacts.html",
};

// Read (1)
const login_forms = {
  Library: "https://library.tip.edu.ph/",
  "T.I.P. E-mail": "https://tip.edu.ph/mail.php",
  ARIS: "https://tip.edu.ph/aris/",
};

/**
 * Description: Generates the html code for the nav bar links based on the object passed.
 * @param {object} object
 */
function add_links(object) {
  let code = "";
  for (let name in object) {
    const href = object[name];
    code += `<a href="${href}">${name}</a>`;
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

mobile_nav.addEventListener("click", reveal_or_hide);

// Closes the mobile navbar automatically when the user taps/clicks outside of it
document.addEventListener(
  "click",
  (e) => {
    e = e || window.event;
    if (
      !(e.target.id.search("navbar-container|mobile-nav") > -1) &&
      nav.hasAttribute("active")
    ) {
      reveal_or_hide();
    }
  },
  false
);
