import { EOL, cpus, userInfo, arch } from 'os';
import { wrong } from '../helpers/showMessage.js';

export const getOsData = (arr) => {
  if (arr.length !== 1) {
    wrong();
    return;
  }

  switch (arr[0]) {
    case '--EOL':
      console.log(`\n\x1b[35mDefault system End-Of-Line: ${JSON.stringify(EOL)}\x1b[35m\n`);
      break;
    case '--cpus':
      const cores = cpus().map(({ model, speed }) => {
        return { 'CPU model': model, 'clock rate': speed / 1000 + 'GHz' };
      });
      console.log(`\nOverall amount of CPUS: ${cores.length}\n`);
      console.table(cores);
      break;
    case '--homedir':
      console.log(`\n\x1b[35mCurrent system home folder: ${userInfo().homedir}\x1b[35m\n`);
      break;
    case '--username':
      console.log(`\n\x1b[35mCurrent system user name: ${userInfo().username}\x1b[35m\n`);
      break;
    case '--architecture':
      console.log(`\n\x1b[35mCPU architecture: ${arch()}\x1b[35m\n`);
      break;
    default:
      wrong();
  }
};
