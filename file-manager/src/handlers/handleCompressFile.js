import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { handlePaths } from '../helpers/handlePaths.js';
import { error } from '../helpers/showMessage.js';

export const handleCompressFile = async (paths, flag) => {
  try {
    let [sourceFile, targetFile] = handlePaths(paths);
    let zip;

    if (flag === 'compress') {
      targetFile = targetFile + '.br';
      zip = createBrotliCompress();
    }

    if (flag === 'decompress') {
      targetFile = targetFile.slice(0, -3);
      console.log(targetFile);
      zip = createBrotliDecompress();
    }

    const readStream = createReadStream(sourceFile);
    const writeStream = createWriteStream(targetFile);
    await pipeline(readStream, zip, writeStream);
  } catch {
    error();
  }
};
