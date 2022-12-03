import { resolve, parse } from 'path';
import { error } from '../helpers/showMessage.js';

export const goToFolder = (folder) => {
  try {
    const isRoot = folder.endsWith(':') && folder.length === 2;
    const targetPath = resolve(folder);
    const targetFolder = isRoot ? parse(targetPath).root : targetPath;
    process.chdir(targetFolder);
  } catch {
    error();
  }
};
