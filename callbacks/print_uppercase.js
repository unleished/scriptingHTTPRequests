var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

// print_uppercase.js : Transforms the html string into ALL CAPS and prints it to the console.

// function printHTML (html) {
//   console.log(html);
// }

function toUpper (html) {
  var upperString = html.toUpperCase();
  console.log(upperString);
}
getHTML(requestOptions, toUpper);