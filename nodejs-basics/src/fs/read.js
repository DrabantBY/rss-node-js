import { getFilePath } from '../getFilePath.js';
import { readFile } from 'fs/promises';

const read = async () => {
  const targetFile = getFilePath(import.meta.url, 'files/fileToRead.txt');
  const options = { encoding: 'utf-8' };

  try {
    const data = await readFile(targetFile, options);
    console.log(data);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
