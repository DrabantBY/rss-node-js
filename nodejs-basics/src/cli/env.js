const parseEnv = () => {
  const rssVarStr = Object.entries(process.env)
    .reduce((acc, [key, val]) => {
      key.startsWith('RSS_') && acc.push(`${key}=${val}`);
      return acc;
    }, [])
    .join('; ');

  console.log(rssVarStr);
};

parseEnv();
