import { getFilePath } from '../getFilePath.js';
import { rename as setNewName } from 'fs/promises';

const rename = async () => {
  const sourceFile = getFilePath(import.meta.url, 'files/wrongFilename.txt');
  const targetFile = getFilePath(import.meta.url, 'files/properFilename.md');

  try {
    await setNewName(sourceFile, targetFile);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
