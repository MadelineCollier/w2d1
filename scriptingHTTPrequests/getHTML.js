const https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var buffer;

    response.on('data', function (data) {
      buffer += data.toString();
      printHTML(buffer);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });
};


function printHTML (html) {
  console.log(html);
}


getHTML(requestOptions, printHTML());