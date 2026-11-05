import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { app } from './app.js';
import { env } from './config/env.js';

const server = express();
server.disable('x-powered-by');
server.use(helmet());
server.use(cors({ origin: env.frontendOrigins }));
server.use(express.json({ limit: '1mb' }));
server.use(app);

server.listen(env.port, () => {
  console.log(`API server listening on http://localhost:${env.port}`);
});
