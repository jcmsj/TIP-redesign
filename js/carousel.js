// Our "entry point" element to write content to.
const carousel = document.getElementById("carousel-parent");

// Static content in the form of a Description → [Href, Src] mapping.
const contents = {
  "T.I.P. now accepting applicants for second online TCP": [
    "https://tip.edu.ph/article/TIP-now-accepting-applicants-second-online-TCP.html",
    "https://tip.edu.ph/index_files/TCP_2_627x377.png",
  ],
  "T.I.P., SUBICWATER collab for wastewater treatment project in Zambales": [
    "https://tip.edu.ph/article/TIP-SUBICWATER-collab-wastewater-treatment-project-Zambales.html",
    "https://tip.edu.ph/index_files/T.I.P._x_SubicWater_628x378.jpg",
  ],
  "T.I.P. named 5th top school for engineering research in the country - IRIS":
    [
      "https://tip.edu.ph/article/TIP-named-5th-top-school-engineering-research-country-IRIS.html",
      "https://tip.edu.ph/index_files/IRIS_Ranking_628x738.jpg",
    ],
  "T.I.P. continues runner-up streak in Impact 5G Hackathon with carbon-reducing e-commerce app":
    [
      "https://tip.edu.ph/article/TIP-continues-runner-up-streak-Impact-5G-Hackathon-carbon-reducing-e-commerce-app.html",
      "https://tip.edu.ph/index_files/Impact_5G_NEW_627x377.png",
    ],
  "T.I.P. ComSci senior clinches 1st runner-up in Impact 5G Hackathon with essay grading app":
    [
      "https://tip.edu.ph/article/TIP-ComSci-senior-clinches-1st-runner-up-Impact-5G-Hackathon-essay-grading-app.html",
      "https://tip.edu.ph/index_files/Eassay_628x377.jpg",
    ],
  "T.I.P.ians bag 1st place in industrial engineering conference with undergraduate research paper":
    [
      "https://tip.edu.ph/article/TIPians-bag-1st-place-industrial-engineering-conference-undergraduate-research-paper.html",
      "https://tip.edu.ph/index_files/IEOM2021_628x377.jpg",
    ],
  "T.I.P.'s Cleenvent solar-powered ventilation system wins 2nd place in Youthpreneur competition":
    [
      "https://tip.edu.ph/article/TIP-Cleenvent-solar-powered-ventilation-system-wins-2nd-place-Youthpreneur-competition.html",
      "https://tip.edu.ph/index_files/Cleenvent_628x377.jpg",
    ],
  "Top caliber professionals grace T.I.P.'s online teaching certificate program":
    [
      "https://tip.edu.ph/article/Top-caliber-professionals-grace-TIP-online-teaching-certificate-program.html",
      "https://tip.edu.ph/index_files/TCP_Lecturers_628x377.png",
    ],
  "T.I.P. merges science with business, to offer PSM degree in Engineering Management":
    [
      "https://tip.edu.ph/article/TIP-merges-science-business-offer-PSM-degree-Engineering-Management.html",
      "https://tip.edu.ph/index_files/PSM_EM_628x377.png",
    ],
  "T.I.P. student innovations win golds, silvers in first-ever MIPIBIEx": [
    "https://tip.edu.ph/article/TIP-student-innovations-win-golds-silvers-first-ever-MIPIBIEx.html",
    "https://tip.edu.ph/index_files/MIPIBIEx_628x377.png",
  ],
  "No scraps left behind: T.I.P. engineering senior builds 4-in-1 rechargeable emergency kit from recycled materials":
    [
      "https://tip.edu.ph/article/No-scraps-left-behind-TIP-engineering-senior-builds-4-in-1-rechargeable-emergency-kit-recycled-materials.html",
      "https://tip.edu.ph/index_files/4-in-1_Rechargeable_Emergency_Kit_627x377.png",
    ],
  "T.I.P.'s non-invasive bacteria detector on wounds scores podium finish in 2021 James Dyson Awards, advances to internationals":
    [
      "https://tip.edu.ph/article/TIP-non-invasive-bacteria-detector-wounds-scores-podium-finish-2021-James-Dyson-Awards-advances-internationals.html",
      "https://tip.edu.ph/index_files/JDA_627x377.png",
    ],
  "Building Careers, Transforming Lives: T.I.P. Career Center celebrates 7 years":
    [
      "https://tip.edu.ph/article/Building-Careers-Transforming-Lives-TIP-Career-Center-celebrates-7-years.html",
      "https://tip.edu.ph/index_files/T.I.P._Career_Center_7th_Anniversary_628x378.jpg",
    ],
  "T.I.P. recognizes top performing instructors, best OBTL portfolio in mid-year assembly":
    [
      "https://tip.edu.ph/article/TIP-recognizes-top-performing-instructors-best-OBTL-portfolio-mid-year-assembly.html",
      "https://tip.edu.ph/index_files/Best_Faculty_OBTL_Portfolio_627x377.png",
    ],
};

// Create the initial carousel entries.
Object.entries(contents).forEach(([text, [href, src]], index) => {
  let zIndex = (Object.keys(contents).length - index) * 10;
  carousel.innerHTML += `
      <a class="carousel-link" href="${href}">
        <div class="carousel-wrapper" style="z-index: ${zIndex}">
          <div class="carousel-content">
            <p>
              ${text}
            </p>
          </div>
          <img class="carousel-image" alt="" src="${src}"/>
        </div>
      </a>
    `;
});

// Collect all of our carousel entries.
const items = Array.from(document.querySelectorAll(".carousel-wrapper"));

// Set some state for the current entry.
let cursor = 0;

// Procedure for cycling through carousel entries. See further below for
// a visual demonstration.
function cycle() {
  // If we're not at the last entry.
  if (cursor + 1 < items.length) {
    // Fade out the current entry.
    items[cursor].classList.toggle("fade-out");

    // Wait 1.525 seconds to hide the entry.
    let cursor_ = cursor; // Save the value since we're calling later
    setTimeout(() => {
      items[cursor_].classList.toggle("hidden");
    }, 1525);

    // and move on to the next one.
    cursor += 1;
  } else {
    // Otherwise
    // Fade out the current entry.
    items[cursor].classList.toggle("fade-out");

    // Wait 1.525 seconds to hide the entry.
    let cursor_ = cursor;
    setTimeout(() => {
      items[cursor_].classList.toggle("hidden");
    }, 1525);

    // Fade-in the first entry.
    items[0].classList.remove("hidden");
    items[0].classList.toggle("fade-in");

    // Wait for 1 second...
    setTimeout(() => {
      // Remove existing `fade-out`s from the 2nd entry onwards to
      // prepare for another cycle.
      for (item of items.slice(1)) {
        item.classList.toggle("fade-out");
        item.classList.toggle("hidden");
      }

      // Wait for 1 second...
      setTimeout(() => {
        // Remove `fade-out` and `fade-in` from the 1st entry to
        // prepare for another cycle.
        items[0].classList.toggle("fade-out");
        items[0].classList.toggle("fade-in");
      }, 1000);
    }, 1000);

    // Go back to the first entry;
    cursor = 0;
  }
}

// To demonstrate, consider:
//
// [0] : <>
// [1] : <>
// [2] : <>
//
// Calling `cycle` once, we get:
//
// [0] : [fade-out]
// [1] : <>
// [2] : <>
//
//
// Calling `cycle again, we get:
//
// [0] : <fade-out>
// [1] : [fade-out]
// [2] : <>
//
// Since we're at the last entry, when we call `cycle`, we
// simultaneously fade out `2`, and fade in `0`:
//
// [0] : <fade-out, [fade-in]>
// [1] : <fade-out>
// [2] : [fade-out]
//
// After a second, `1` onwards gets cleaned up:
//
// [0] : <fade-out, [fade-in]>
// [1] : []
// [2] : []
//
// After another second, `0` gets cleaned up:
//
// [0] : []
// [1] : <>
// [2] : <>
//
// And we're back to the initial state.

// Periodically cycle the banner every 5 seconds.
setInterval(() => {
  cycle();
}, 5000);
