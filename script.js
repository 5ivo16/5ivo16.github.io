// Requiring fs module in which writeFile function is defined.
const fs = require('fs')

// Change background to the colour black.
function toBlack() {
  document.body.style.backgroundColor = "black";
}

// Change background to the colour white.
function toWhite() {
  document.body.style.backgroundColor = "white";
}

// This function writes the URL of a visitor to output.txt.
function writeURL() {
  // Data which will write in a file.
  let data = "Learning how to write in a file."
  
  // Write data in 'Output.txt' .
  fs.writeFile('output.txt', data, (err) => {
      // In case of a error throw err.
      if (err) throw err;
  })
}
