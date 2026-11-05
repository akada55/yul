import type { ErrorRequestHandler } from 'express';

export interface HttpError extends Error {
  status?: number;
  code?: string;
}

export const errorHandler: ErrorRequestHandler = (error: HttpError, _req, res, _next) => {
  const status = error.status && error.status >= 400 && error.status < 600 ? error.status : 500;
  const code = error.code ?? (status === 500 ? 'INTERNAL_SERVER_ERROR' : 'REQUEST_ERROR');

  if (status >= 500) console.error(error);

  res.status(status).json({
    error: {
      code,
      message: status === 500 && process.env.NODE_ENV === 'production'
        ? 'Internal server error'
        : error.message || 'Request failed',
    },
  });
};
