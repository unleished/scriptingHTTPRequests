
var https = require('https');

module.exports = function getHTML (options, callback) {
var bufferStrings = '';

  /* Add your code here */
    https.get(options, function (response) {

        response.setEncoding('utf8');

        // the callback is invoked when a `data` chunk is received
        response.on('data', function (options) {
          bufferStrings += options;
          console.log('gathering options');
        });

        response.on('error', function (options) {
          console.log('error: ', options);
        });

        response.on('end', function() {
          callback(bufferStrings);
        });
    });

}



  // var requestOptions = {
  //   host: 'sytantris.github.io',
  //   path: '/http-examples/step4.html'
  // };

