import { Router } from 'express';
import healthRouter from './routes/health.js';
import apiRouter from './routes/index.js';
import { errorHandler } from './middleware/error-handler.js';
import { notFoundHandler } from './middleware/not-found.js';
import { requestId } from './middleware/request-id.js';

export const app = Router();
app.use(requestId);
app.use(healthRouter);
app.use('/api/v1', apiRouter);
app.use(notFoundHandler);
app.use(errorHandler);
