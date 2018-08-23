const fs = require('fs');

const readableStream = fs.createReadStream('file.txt');

const writableStream = fs.createWriteStream('file2.txt');

const piped = readableStream.pipe(writableStream);
console.log(piped); //.pipe() returns the destination stream
