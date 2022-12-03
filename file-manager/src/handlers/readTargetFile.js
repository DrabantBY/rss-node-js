import { createReadStream } from 'fs';
import { resolve } from 'path';
import { error } from '../helpers/showMessage.js';

export const readTargetFile = (file) => {
  const targetFile = resolve(file);
  const readStream = createReadStream(targetFile);
  readStream.pipe(process.stdout);
  readStream.on('end', () => console.log('\n'));
  readStream.on('error', error);
};
