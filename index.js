const fs = require('fs');
const readableStream = fs.createReadStream('file.txt');
let data = '';

// readableStream.setEncoding('utf8'); //is this always necessary?

readableStream.on('data', function(chunk) {
    data += chunk;
});

readableStream.on('end', function() {
    console.log(data);
});
