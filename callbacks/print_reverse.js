var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function toReverse (html) {
  var reverseString = html.split(' ').reverse().join(' ');
  console.log(reverseString);
}
getHTML(requestOptions, toReverse);

// split
// reverse
// join
