export const error = () => {
  console.error('\x1b[31mOperation failed\x1b[0m');
};

export const hello = (userName) => {
  console.log(`\x1b[34mWelcome to the File Manager, ${userName}!\x1b[0m`);
};

export const bye = (userName) => {
  console.log(`\x1b[34mThank you for using File Manager, ${userName}, goodbye!\x1b[0m`);
};

export const wrong = () => {
  console.log(`\x1b[33mInvalid input\x1b[0m`);
};

export const currentDir = () => {
  console.log(`\x1b[32mYou are currently in ${process.cwd()}\x1b[0m`);
};
