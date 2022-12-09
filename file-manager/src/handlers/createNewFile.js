import { resolve } from 'path';
import { open } from 'fs/promises';
import { error } from '../helpers/showMessage.js';

export const createNewFile = async ([file]) => {
  try {
    const targetFile = resolve(file);
    const state = await open(targetFile, 'wx');
    state.close();
  } catch {
    error();
  }
};
