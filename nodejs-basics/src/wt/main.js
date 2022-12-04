import { getFilePath } from '../getFilePath.js';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
  const targetFile = getFilePath(import.meta.url, 'worker.js');
  const cores = cpus();
  let counter = 10;

  const workers = await Promise.allSettled(
    cores.map(
      (core) =>
        new Promise((resolve, reject) => {
          const worker = new Worker(targetFile, { workerData: counter++ });
          worker.on('message', (data) => resolve(data));
          worker.on('error', (data) => reject(data));
        })
    )
  );

  const results = workers.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null,
  }));

  console.table(results);
  return results;
};

await performCalculations();
