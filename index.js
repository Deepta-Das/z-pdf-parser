
const zPDF_Parser = require("./lib/parser.js");
const debug = false;

if (debug) {
  
  zPDF_Parser("./test.pdf", {
    pageRange: true,
    startPage: 1,
    endPage: 3,
  }).then((response) => {
    console.log(response.text);
    console.log(response.pageCount);
    console.log(response.version);
  });
}

module.exports = zPDF_Parser;
