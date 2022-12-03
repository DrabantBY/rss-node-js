import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { resolve } from 'path';
import { error } from '../helpers/showMessage.js';
import { pipeline } from 'stream/promises';

export const getHashFile = async (file) => {
  try {
    const targetFile = resolve(file);
    const readStream = createReadStream(targetFile);
    const hash = createHash('sha256');
    await pipeline(readStream, hash.setEncoding('hex'), process.stdout);
    console.log('\n');
    // readStream.pipe(hash).setEncoding('hex').pipe(process.stdout);
    // readStream.on('end', () => console.log('\n'));
    // readStream.on('error', error);
  } catch {
    error();
  }
};
