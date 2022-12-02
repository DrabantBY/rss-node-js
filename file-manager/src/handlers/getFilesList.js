import { wrong, error } from '../helpers/showMessage.js';
import { transformDataFiles } from '../helpers/transformDataFiles.js';
import { resolve } from 'path';
import { readdir } from 'fs/promises';

export const getFilesList = async (arr) => {
  if (arr.length) {
    wrong();
  } else {
    const currentFolder = resolve(process.cwd());
    try {
      const files = await readdir(currentFolder, { withFileTypes: true });
      const dataFile = await Promise.all(
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
  }
};
