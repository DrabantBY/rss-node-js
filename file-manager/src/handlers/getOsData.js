import { EOL, cpus, userInfo, arch } from 'os';
import { wrong } from '../helpers/showMessage.js';

export const getOsData = ([arg]) => {
  switch (arg) {
    case '--EOL':
      console.log(`\x1b[35mDefault system End-Of-Line: ${JSON.stringify(EOL)}\x1b[35m`);
      break;

    case '--cpus':
      const cores = cpus().map(({ model, speed }) => {
        return { 'CPU model': model, 'clock rate': speed / 1000 + 'GHz' };
      });
      console.log(`Overall amount of CPUS: ${cores.length}`);
      console.table(cores);
      break;

    case '--homedir':
      console.log(`\x1b[35mCurrent system home folder: ${userInfo().homedir}\x1b[35m`);
      break;

    case '--username':
      console.log(`\x1b[35mCurrent system user name: ${userInfo().username}\x1b[35m`);
      break;

    case '--architecture':
      console.log(`\x1b[35mCPU architecture: ${arch()}\x1b[35m`);
      break;

    default:
      wrong();
  }
};
