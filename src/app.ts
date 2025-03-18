import express, { json, urlencoded } from 'express';

import errorHandler from './middleware/errorHandler';
import { router } from './routes';

export const app = express();

// Middleware
app.use(urlencoded({ extended: true }));
app.use(json());
// Router
app.use('/', router);
// Error handler
app.use(errorHandler);
