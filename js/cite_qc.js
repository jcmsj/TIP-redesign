function shared_outcomes() {
    // (2) Most of the items in the Student Outcomes share the same info, to avoid repetition use this function
    return `
        <li>apply knowledge of computing, science, and mathematics appropriate to the discipline;</li>
        <li>analyze a complex problem and identify and define the computing requirements appropriate to its solution;</li>
        <li>design, implement, and evaluate a computer based system, process, component, or program to meet desired needs with appropriate constraints for public health and safety, cultural, societal, and environmental considerations;</li>
        <li>use modern techniques, skills, and tools of computing practice in complex computing activities;</li>
        <li>function effectively as an individual and as a member or leader in diverse teams and in multi-disciplinary settings;</li>
        <li>communicate effectively about complex computing activities with various communities, such as computing experts and society at large, using appropriate levels of discourse;</li>
        <li>analyze the local and global impact of computing on individuals, organizations, and society;</li>
        <li> understand professional, ethical, legal, security, and social issues and responsibilities relevant to professional computing practice;</li>
        <li>recognize the need for, and have the ability to engage in continuous professional development and lifelong learning;</li>
    `
}

function shared_extra() {
    // Same with (2)
    return `
        <li>Analyze a complex computing problem and apply principles of computing and other relevant disciplines to identify solutions.</li>
        <li>Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program’s discipline.</li>
        <li>Communicate effectively in a variety of professional contexts.</li>
        <li>Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.</li>
        <li>Function effectively as a member or leader of a team engaged in activities appropriate to the program’s discipline.</li>
    `
}

/**
 * Appends html code to the HTMLElement
 * @param {HTMLElement} elem 
 * @param {function} callback 
 */
function generate_items(elem, callback) {
    if (elem != undefined) {
        let prev = elem.innerHTML;
        elem.innerHTML = callback() + prev;
    }
}

for (let i = 0; i < 3; i ++) {
    const shared = document.getElementById(`shared-${i}`);
    const shared_ex = document.getElementById(`shared-ex-${i}`);
    generate_items(shared, shared_outcomes);
    generate_items(shared_ex, shared_extra);
}