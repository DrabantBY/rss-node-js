import { error } from '../helpers/showMessage.js';
import { transformDataFiles } from '../helpers/transformDataFiles.js';
import { resolve } from 'path';
import { readdir } from 'fs/promises';

export const getFilesList = async () => {
  try {
    const currentFolder = resolve(process.cwd());
    const files = await readdir(currentFolder, { withFileTypes: true });

    const dataFiles = await Promise.all(
      files.map(async (file) => {
        const { name } = file;
        let type = null;
        file.isFile() && (type = 'file');
        file.isDirectory() && (type = 'directory');
        return { name, type };
      })
    );

    const table = transformDataFiles(dataFiles);

    console.table(table);
  } catch {
    error();
  }
};
