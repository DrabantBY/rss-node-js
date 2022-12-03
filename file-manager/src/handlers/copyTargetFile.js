import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { error } from '../helpers/showMessage.js';
import { handlePaths } from '../helpers/handlePaths.js';

export const copyTargetFile = async (paths) => {
  try {
    const [sourceFile, targetFile] = handlePaths(paths);
    const readStream = createReadStream(sourceFile);
    const writeStream = createWriteStream(targetFile);
    await pipeline(readStream, writeStream);
  } catch {
    error();
  }
};
