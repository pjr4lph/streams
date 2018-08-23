const fs = require('fs');

const readableStream = fs.createReadStream('file.txt');
const writableStream = fs.createWriteStream('file2.txt');

readableStream.on('data', function(chunk) {
  const didWrite = writableStream.write(chunk);
  console.log(didWrite);
});

console.log(process.arch);
