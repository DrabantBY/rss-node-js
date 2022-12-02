import { wrong } from '../helpers/showMessage.js';

export const goUpFolder = (arr) => {
  if (arr.length) {
    wrong();
  } else {
    process.chdir('..');
  }
};
