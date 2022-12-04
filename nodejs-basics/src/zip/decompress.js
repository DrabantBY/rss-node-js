import { getFilePath } from '../getFilePath.js';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

const decompress = async () => {
  const archive = getFilePath(import.meta.url, 'files/archive.gz');
  const targetFile = getFilePath(import.meta.url, 'files/fileToCompress.txt');
  const readStream = createReadStream(archive);
  const writeStream = createWriteStream(targetFile);
  const unzip = createUnzip();
  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
