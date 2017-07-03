const https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


function getHTML (options, callback) {

  var buffer = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data.toString();
    });

    response.on('end', function() {
      callback(buffer);
      console.log('Response stream complete.');
    });

  });
};


function printHTML (html) {
  console.log(html);
}


getHTML(requestOptions, printHTML);