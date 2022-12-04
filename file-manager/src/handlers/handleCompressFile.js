import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { brotliCompress, brotliDecompress } from 'zlib';
import { handlePaths } from '../helpers/handlePaths.js';
import { error } from 'showMessage.js';

export const handleCompressFile = async (paths, flag) => {};
