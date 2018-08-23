//  Implement an object constructor Feed that returns a readable stream that will emit
// an array of strings ['one','two','three'] such that those who want to read the stream
// can instantiate the object and connect to with code like this:
const stream = require('stream');

let Feed = function() {
  let readable = new stream.Readable({});
  let nums = ['one','two','three'];
  readable._read = () => {
    //how does _read work under the hood - cant use for loop,
    // does _read loop in some way? i guess its a stream so
    // is it constant? or is it just running every time "readable" is emmitted?
    // a while loop works instead of the if statement(but why?)
    if (nums.length) {
      return readable.push(nums.shift() + '\n');
    }
    readable.push(null);
  };
  return readable;
}

const feed = new Feed();

feed.on("readable", () => {
    let data = feed.read();
    data && process.stdout.write(data);
});

feed.on("end", () => console.log("info"));

// That will emit to the console this:
// one
// two
// three

// Stretch goals: implement writable, such that you take the above and write output to a
// file instead.
