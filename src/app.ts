import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { defaultErrorHandler } from './middlewares/defaultErrorHandler';

export const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/prueba', async (_req, res, next) => {
  try {
    res.status(200).json({
      message: 'Servidor Corriendo'
    });
  } catch (error) {
    next(error);
  }
});

app.use('/api/v1/prueba', defaultErrorHandler);