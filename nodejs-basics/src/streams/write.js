import { getFilePath } from '../getFilePath.js';
import { createWriteStream } from 'fs';

const write = async () => {
  const targetFile = getFilePath(import.meta.url, 'files/fileToWrite.txt');
  const writeStream = createWriteStream(targetFile);
  process.stdin.pipe(writeStream);
};

await write();
