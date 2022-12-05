export const validateLineData = (point, data) => {
  return (
    (data.length === 0 && ['ls', 'up', '.exit'].some((el) => el === point)) ||
    (data.length === 1 && ['cd', 'cat', 'add', 'rm', 'os', 'hash'].some((el) => el === point)) ||
    (data.length === 2 && ['rn', 'cp', 'mv', 'compress', 'decompress'].some((el) => el === point))
  );
};
