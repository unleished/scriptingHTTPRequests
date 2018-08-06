var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

var leekString = '';

function toLeek (html) {

  var leekArr = html.split(' ')
  console.log(leekString);
  for (var i = 0; i < leekArr.length; i++)
    var letter = leekArr[i];
// a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'
    if (letter  === 'a') {
      leekString += '4';
    } else if (letter === 'e') {
      leekString += '3';

    }


console.log('letter: ', letter);
console.log('leekString: ', leekString);




  console.log(leekString);
}
getHTML(requestOptions, toLeek);
