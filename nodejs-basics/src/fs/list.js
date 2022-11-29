import { getFilePath } from '../getFilePath.js';
import { readdir } from 'fs/promises';

const list = async () => {
  const targetFolder = getFilePath(import.meta.url, 'files');

  try {
    const fileNames = await readdir(targetFolder);
    console.table(fileNames);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
