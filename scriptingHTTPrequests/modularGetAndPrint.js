const https = require('https');



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


function getAndPrintHTML (options) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var buffer;

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      buffer += data.toString();
      console.log(buffer);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });
}

getAndPrintHTML(requestOptions);