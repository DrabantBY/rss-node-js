import { resolve, parse } from 'path';

export const handlePaths = ([sourcePath, targetPath]) => {
  const sourceFile = resolve(sourcePath);
  const { base } = parse(sourceFile);
  const targetFile = resolve(targetPath, base);
  return [sourceFile, targetFile];
};
