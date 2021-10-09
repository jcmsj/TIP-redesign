// Our "entry point" element to write content to.
const carousel = document.getElementById("carousel-parent");

// Static content in the form of a Description" → Image Source mapping.
const contents = {
    "T.I.P. now accepting applicants for second online TCP": "https://tip.edu.ph/index_files/TCP_2_627x377.png",
    "T.I.P. named 5th top school for engineering research in the country - IRIS": "https://tip.edu.ph/index_files/IRIS_Ranking_628x738.jpg",
    "T.I.P. continues runner-up streak in Impact 5G Hackathon with carbon-reducing e-commerce app": "https://tip.edu.ph/index_files/Impact_5G_NEW_627x377.png",
}

// Create the initial carousel entries.
Object.entries(contents).forEach(([text, src], index) => {
    let zIndex = (Object.keys(contents).length - index) * 10
    carousel.innerHTML += `
        <div class="carousel-wrapper" style="z-index: ${zIndex}">
          <div class="carousel-content">
            <p>
              ${text}
            </p>
          </div>
          <img class="carousel-image" alt="" src="${src}"/>
        </div>
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
        // and move on to the next one.
        cursor += 1;
    } else { // Otherwise
        // Fade out the current entry.
        items[cursor].classList.toggle("fade-out");

        // Go to the first entry.
        cursor = 0 ;

        // Fade-in the first entry.
        items[cursor].classList.toggle("fade-in");

        // Wait for 1 second...
        setTimeout(() => {
            // Remove existing `fade-out`s from the 2nd entry onwards to
            // prepare for another cycle.
            for (item of items.slice(1)) {
                item.classList.toggle("fade-out");
            }

            // Wait for 1 second...
            setTimeout(() => {
                // Remove `fade-out` and `fade-in` from the 1st entry to
                // prepare for another cycle.
                items[0].classList.toggle("fade-out");
                items[0].classList.toggle("fade-in");
            }, 1000);
        }, 1000);
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
    cycle()
}, 5000);
