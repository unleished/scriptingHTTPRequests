var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function toLower (html) {
  var lowerString = html.toLowerCase();
  console.log(lowerString);
}
getHTML(requestOptions, toLower);