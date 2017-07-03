const https = require('https');



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


function getAndPrintHTML (options) {

  var buffer = "";

  https.get(options, function (response) {

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

getAndPrintHTML(requestOptions);