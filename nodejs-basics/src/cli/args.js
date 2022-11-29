const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = args
    .reduce((acc, arg, i, arr) => {
      arr[i + 1] && arg.startsWith('--') && acc.push(`${arg.slice(2)} is ${arr[i + 1]}`);
      return acc;
    }, [])
    .join(', ');

  console.log(result);
};

parseArgs();
