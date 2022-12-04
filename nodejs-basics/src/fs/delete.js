import { getFilePath } from '../getFilePath.js';
import { rm } from 'fs/promises';

const remove = async () => {
  const targetFile = getFilePath(import.meta.url, 'files/fileToRemove.txt');

  try {
    await rm(targetFile);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
