import { getFilePath } from '../getFilePath.js';
import { readdir, mkdir, copyFile } from 'fs/promises';
import { join } from 'path';
// import { cp } from 'fs/promises';

const copy = async () => {
  const targetFolder = getFilePath(import.meta.url, 'files_copy');
  const sourceFolder = getFilePath(import.meta.url, 'files');
  // const options = { recursive: true, force: false, errorOnExist: true };
  try {
    // await cp(sourceFolder, targetFolder, options);
    await mkdir(targetFolder);
    const files = await readdir(sourceFolder);
    await Promise.all(
      files.map((file) => {
        const targetFile = join(targetFolder, file);
        const sourceFile = join(sourceFolder, file);
        return copyFile(sourceFile, targetFile);
      })
    );
  } catch {
    throw new Error('FS operation failed');
  }
};

copy();
