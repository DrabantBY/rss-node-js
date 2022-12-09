export const transformDataFiles = (dataFiles) => {
  return dataFiles
    .filter((file) => file.type !== null)
    .sort((a, b) => {
      if (a.type > b.type) {
        return 1;
      }

      if (a.type < b.type) {
        return -1;
      }

      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    });
};
