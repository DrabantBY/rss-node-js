import { getFilePath } from '../getFilePath.js';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
  const targetFile = getFilePath(import.meta.url, 'files/fileToCompress.txt');
  const archive = getFilePath(import.meta.url, 'files/archive.gz');
  const readStream = createReadStream(targetFile);
  const writeStream = createWriteStream(archive);
  const gzip = createGzip();
  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
