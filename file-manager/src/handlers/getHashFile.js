import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { resolve } from 'path';
import { error } from '../helpers/showMessage.js';

export const getHashFile = async ([file]) => {
  const targetFile = resolve(file);
  const readStream = createReadStream(targetFile);
  const hash = createHash('sha256').setEncoding('hex');
  readStream.pipe(hash).pipe(process.stdout);
  readStream.on('end', () => process.stdout.write('\n')); // move to next line
  readStream.on('error', error);
};
