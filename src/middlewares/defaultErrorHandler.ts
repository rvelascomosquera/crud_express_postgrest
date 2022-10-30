import { ErrorRequestHandler } from 'express';

export const defaultErrorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  if (err) {
    const status = err.status || 500;
    // postgreSQL error || express/node error || default
    const message = err.original?.message || err.message || 'Something went wrong';

    res.status(status).json({
      status,
      message
    });
  } else {
    next();
  }
};
