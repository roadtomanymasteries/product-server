import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.error({
    message: 'An error has occurred',
    description: (error as Error).message,
  });

  res.status(500).json({
    message: (error as Error).message,
  });
};
