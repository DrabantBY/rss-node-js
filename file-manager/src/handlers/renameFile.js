import { error } from '../helpers/showMessage.js';
import { rename } from 'fs/promises';
import { resolve, dirname } from 'path';

export const renameFile = async ([targetFile, newFileName]) => {
  try {
    const targetFilePath = resolve(targetFile);
    const targetFolder = dirname(targetFilePath);
    const newFilePath = resolve(targetFolder, newFileName);
    await rename(targetFilePath, newFilePath);
  } catch {
    error();
  }
};
