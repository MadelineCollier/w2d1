const https = require('https');


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var buffer = "";

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      buffer += data.toString();
    });

    response.on('end', function() {
      console.log(buffer);
      console.log('Response stream complete.');
    });

  });
}

getAndPrintHTML();