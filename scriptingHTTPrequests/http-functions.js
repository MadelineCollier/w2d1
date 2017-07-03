module.exports = function getHTML (options, callback) {

  const https = require('https');

  var buffer = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;
    });

    response.on('end', function() {
      callback(buffer);
      console.log('Response stream complete.');
    });

  });
};
