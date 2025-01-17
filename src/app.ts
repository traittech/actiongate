import express from 'express';

import { router } from './routes';

export const app = express();

// Middleware
app.use(express.json());
// Router
app.use('/', router);
