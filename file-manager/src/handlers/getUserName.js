export const getUserName = () => {
  let [key, userName] = process.argv.at(-1).split(/\=+/);
  if (key !== '--username') {
    return null;
  }
  return userName || 'Stranger';
};
