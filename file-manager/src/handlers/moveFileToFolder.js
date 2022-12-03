import { copyTargetFile } from './copyTargetFile.js';
import { removeTargetFile } from './removeTargetFile.js';

export const moveFileToFolder = async ([sourcePath, targetPath]) => {
  await copyTargetFile([sourcePath, targetPath]);
  await removeTargetFile(sourcePath);
};
