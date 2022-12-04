import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  const reverseStream = new Transform({
    transform(data, enc, callback) {
      const dataString = data.toString().trim();
      const dataReversed = dataString.split('').reverse().join('');
      callback(null, dataReversed + '\n');
    },
  });

  try {
    await pipeline(process.stdin, reverseStream, process.stdout);
  } catch (err) {
    console.log(err.message);
  }
};

await transform();
