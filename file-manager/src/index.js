import { createInterface } from 'readline/promises';
import { homedir } from 'os';
import { getUserName } from './handlers/getUserName.js';
import * as message from './helpers/showMessage.js';
import { parseEnterData } from './handlers/parseEnterData.js';

const userName = getUserName();

if (userName) {
  process.chdir(homedir());

  message.hello(userName);
  message.currentDir();

  const readLine = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine.on('line', parseEnterData);
  readLine.on('SIGINT', process.exit);

  process.on('exit', () => message.bye(userName));
  process.on('error', () => message.error());
} else {
  message.error();
}
