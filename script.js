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

// This function appends the URL of a visitor to log.txt.
function log() {
  // Data which will write in a file.
  let data = "Learning how to write in a file."
  
  // Write data in 'log.txt' .
  fs.appendFile('log.txt', data, (err) => {
      // In case of a error throw err.
      if (err) throw err;
  })
}
