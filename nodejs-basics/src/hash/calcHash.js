import { getFilePath } from '../getFilePath.js';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const targetFile = getFilePath(import.meta.url, 'files/fileToCalculateHashFor.txt');
  const readStream = createReadStream(targetFile);
  const hash = createHash('sha256');
  readStream.pipe(hash).setEncoding('hex').pipe(process.stdout);
};

await calculateHash();
