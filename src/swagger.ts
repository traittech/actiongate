import fs from 'fs';
import path from 'path';

import jsyaml from 'js-yaml';
import swaggerUi from 'swagger-ui-express';

const swaggerFilePath = path.join(__dirname, '../docs/swagger.yaml');
const swaggerSpec = jsyaml.load(fs.readFileSync(swaggerFilePath, 'utf8')) as object;

export { swaggerSpec, swaggerUi };
