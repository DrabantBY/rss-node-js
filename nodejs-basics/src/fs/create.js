import { getFilePath } from '../getFilePath.js';
import { appendFile } from 'fs/promises';

const create = async () => {
  const text = 'I am fresh and young';
  const targetFile = getFilePath(import.meta.url, 'files/fresh.txt');
  const options = { flag: 'wx' };

  try {
    await appendFile(targetFile, text, options);
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
