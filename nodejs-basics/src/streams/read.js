import { getFilePath } from '../getFilePath.js';
import { createReadStream } from 'fs';

const read = async () => {
  const targetFile = getFilePath(import.meta.url, 'files/fileToRead.txt');
  const readStream = createReadStream(targetFile);
  readStream.pipe(process.stdout);
};

await read();
