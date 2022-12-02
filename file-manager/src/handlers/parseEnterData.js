import { getOsData } from './getOsData.js';
import { wrong } from '../helpers/showMessage.js';
import { currentDir } from '../helpers/showMessage.js';
import { goUpFolder } from './goUpFolder.js';
import { getFilesList } from './getFilesList.js';

export const parseEnterData = async (line) => {
  const [data, ...args] = line.trim().split(/\s+/);

  switch (data) {
    case 'up':
      goUpFolder(args);
      break;
    case 'ls':
      await getFilesList(args);
      break;
    case '.exit':
      process.exit();
      break;
    case 'os':
      getOsData(args);
      break;
    default:
      wrong();
  }

  currentDir();
};
