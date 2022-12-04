import { getFilePath } from '../getFilePath.js';
import { spawn, fork } from 'child_process';

export const spawnChildProcess = async (args) => {
  const mainFile = getFilePath(import.meta.url, 'files/script.js');
  const childProcess = fork(mainFile, args);

  // const childProcess = spawn('node', [mainFile, ...args]);
  // process.stdin.pipe(childProcess.stdin);
  // childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(process.argv);
