lectureNotes21.js

const http = require('http');


// GET /dist/index.json HTTP/1.1
// Host: nodejs.org
//


http.get('http://nodejs.org/dist/index.json', function(res) {
  const statusCode = res.statusCode;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', function(chunk) {
    rawData += chunk;
  });

  res.on('end', function() {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', function(e) {
  console.error(`Got error: ${e.message}`);
});