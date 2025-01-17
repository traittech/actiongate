import SwaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/swagger.json';

import type { Router } from 'express';

export function RegisterRoutes(router: Router): void {
  router.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));
  router.use('/api-docs.json', (req, res) => { res.json(swaggerDocument) });
}
