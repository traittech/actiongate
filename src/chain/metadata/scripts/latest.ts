import fs from 'node:fs';
import fetch from 'node-fetch';
import path from 'node:path';

async function rpcRequest(endpoint: string, module: string, method: string, params: any[] = []) {
  const rpcMethod = [module, method].join('_');

  const body = JSON.stringify({
    id: 1,
    jsonrpc: '2.0',
    method: rpcMethod,
    params,
  });

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });

  const data = await response.json();

  return data;
};

async function requestMeta(endpoint: string) {
  const module = 'state';
  const method = 'getMetadata'

  const response = await rpcRequest(endpoint, module, method);

  return (response as any).result;
}

(async function main() {
  const filename = 'latest.json';

  const args = process.argv.slice(2);

  const endpointIndex = args.findIndex((arg) => arg === '--endpoint') + 1;
  const endpoint = args[endpointIndex];

  if (!endpoint) {
    console.info('Endpoint is not set! Set it using --endpoint argument');
    console.info('Process exit');
  }

  const outputDirIndex = args.findIndex((arg) => arg === '--output') + 1;
  const outputDir = args[outputDirIndex];

  if (!outputDir) {
    console.info('Output directory is not set! Set it using --output argument');
    console.info('Process exit');
  }

  const dirPath = path.join(process.cwd(), outputDir)

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  const outputPath = path.join(dirPath, filename);

  console.info(`Fetch metadata from chain...`);

  const meta = await requestMeta(endpoint);

  fs.writeFileSync(outputPath, JSON.stringify({ latest: meta }));

  console.info(`Metadata generated and saved: ${outputPath}`);

  process.exit(0);
})();