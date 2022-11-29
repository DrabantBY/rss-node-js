import { getFilePath } from '../getFilePath.js';
import { cp } from 'fs/promises';

const copy = async () => {
  const sourceFolder = getFilePath(import.meta.url, 'files');
  const targetFolder = getFilePath(import.meta.url, 'files_copy');
  const options = { recursive: true, force: false, errorOnExist: true };

  try {
    await cp(sourceFolder, targetFolder, options);
  } catch {
    throw new Error('FS operation failed');
  }
};

copy();
