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
    `;
}

function shared_extra() {
  // Same with (2)
  return `
        <li>Analyze a complex computing problem and apply principles of computing and other relevant disciplines to identify solutions.</li>
        <li>Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program’s discipline.</li>
        <li>Communicate effectively in a variety of professional contexts.</li>
        <li>Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.</li>
        <li>Function effectively as a member or leader of a team engaged in activities appropriate to the program’s discipline.</li>
    `;
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

for (let i = 0; i < 3; i++) {
  const shared = document.getElementById(`shared-${i}`);
  const shared_ex = document.getElementById(`shared-ex-${i}`);
  generate_items(shared, shared_outcomes);
  generate_items(shared_ex, shared_extra);
}

/**
 * Description: Generates the html code for a table's data and headers.
 * @param {number} latest
 * @param {number} oldest
 * @param {Array} data
 */
function set_table_data(latest, oldest, data) {
  let table = `
      <tr>
          <th>School Year</th>
          <th>Term</th>
          <th>Enrollment Data</th>
      </tr>`;

  for (let i = latest; i > oldest; i--) {
      table += `
          <tr>
              <td>SY ${i - 1} - ${i}</td<>
              <td>Summer</td>
              <td>${data[latest - i][0]}</td>
          </tr>
          <tr>
              <td></td>
              <td>2nd Semester</td>
              <td>${data[latest - i][1]}</td>
          </tr>
          <tr>
              <td></td>
              <td>1st Semester</td>
              <td>${data[latest - i][2]}</td>
          </tr>
      `
  }

  return table;
}

tables = {
  "CS-ASE": [
        [ "", 202, 212],
        [ 17, 159, 182],
        [16, 141, 170],
        [54, 128, 144],
        [80, 155, 161],
        [72, 186, 210],
        [47, 181, 234],
        [70, 208, 244],
        [49, 209, 247],
        [62, 209, 277],
        [86, 286, 338]
    ],
  "CS-AGD": [
      ["", "", 1],
      ["" , 2, 1],
      ["", 18, 11],
      [1, 17, 8],
      [6, 23, 9],
      [2, 15, 1],
      ["", 7, 3],
      [4, 6, 3],
      [5, 26, 7],
      [4, 32, 23],
      [10, 23, 8]
    ],
  "IS-ASE": [
      ["", 31, 35],
      [1, 41, 55],
      [5, 48, 59],
      [25, 53, 65],
      [40, 71, 72],
      [35, 77, 110],
      [19, 96, 132],
      [14, 84, 86],
      [17, 68, 79],
      [9, 71, 85],
      [12, 75, 83]
    ],
  "IS-AGD": [
      ["", "", 1],
      ["", "", 7],
      ["", 7, 5],
      [1, 12, ""],
      ["", 7, 3],
      [1, 3, 5],
      [1, "", ""],
      ["", "", ""],
      ["", 1, ""],
      ["", 1, 1],
      [1, 2 ,1]
    ],
  "IT-ASE": [
      ["", 734,734],
      [61, 719, 825],
      [109, 603, 703],
      [174, 560, 629],
      [323, 752, 833],
      [335, 956, 1095],
      [343, 1127, 1340],
      [545, 1547, 1850],
      [522, 1795, 2044],
      [644, 2027, 2307],
      [554, 1987, 2225]
  ],
  "IT-AGD": [
      ["", "", 5],
      [1, 28, 33],
      ["", 58, 31],
      [3, 103, 43],
      [4, 115, 68],
      [11, 174, 109],
      [9, 136, 47],
      [18, 196, 52],
      [19, 167, 53],
      [17, 127, 64],
      [18, 80, 32]
    ],
}

for (const [key, value] of  Object.entries(tables)) {
    document.getElementById(key).innerHTML = set_table_data(2021, 2010, value);
}