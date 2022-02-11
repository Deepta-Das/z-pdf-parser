



### Z-Pdf-parser

------

###### JavaScript PDF parser. It uses Mozilla PDF.js library.



#### How to Install?

------

```
npm install z-pdf-parser
```



#### How to use it?

------

```javascript
const PdfParser = require("z-pdf-parser");

const options = {
    // Activate pageRange option so you can parse pages with range.
    // Default = false (parse all pages from document).
    pageRange: true,
    // Define starting page for range
    // Default = 1.
    startPage: 1,
    // Define end page for range
    // Default = 1.
    endPage: 1
}

PdfParser("my_document.pdf", options).then(response => {
    // Response with number of pages that are parsed.
    console.log(response.pageCount);
    // Response with document metadata.
    console.log(response.metadata);
    // Response with document basic info.
    console.log(response.info);
    // Reponse with text
    console.log(response.text);
    // Response with PDFjs version.
});
```
