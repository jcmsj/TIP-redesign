let expanded = false;

const nav = document.getElementById("navbar-container");
const mobile_nav = document.getElementById("mobile-nav");
const main_content = document.getElementById("main-content");

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
  let code = [];
  for (const [name, href] of Object.entries(object)) {
    code.push(`<a href="${href}">${name}</a>`);
  }
  return code.join("\n");
}

// Adds the Logo, site links, and login forms to the nav bar.
nav.innerHTML += `
    <nav>
        <img src=media/logo.png> 
        ${add_links(pages)}
        <hr>
        ${add_links(login_forms)}
    </nav>
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

main_content.innerHTML += `

  <footer class=col-flex>
  <a href="#" id="toTop"><i class="fa fa-3x fa-arrow-up"></i></a>

    <div class=row-flex>
      <div>
      <i class="fa fa-phone"></i> 
      <b>QC Campus</b> 
      - <a href="tel:+63289110964">(+632) 8911-0964</a> 
      / 
      <b>Manila Campus</b> 
      - <a href="tel:+63287339117" >(+632) 8733-9117</a>
      </div>
      <br class=hide-pc>
      <div>
      &nbsp; &nbsp; &nbsp;
        <i class="fa fa-envelope"></i> 
        <a href="mailto:info@tip.edu.ph">info@tip.edu.ph</a>
    |   <a href="https://tip.edu.ph/privacy-notice.html">privacy notice</a>
      </div>
    </div>
    <div>
      <i class="fa fa-map-marker"></i> 
      363 P. Casal St., Quiapo, Manila 
    / 1338 Arlegui St., Quiapo, Manila 
    / 938 Aurora Blvd., Cubao, Quezon City 
    </div>
  </footer>
`;