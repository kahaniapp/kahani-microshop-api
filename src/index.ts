import express, { Express, Request, Response } from 'express';

import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

import apiRouter from './api';

dotenv.config();

const app: Express = express();
// Fall back to 4000 if no port is specified
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// API routes
app.use('/api', apiRouter);

app.listen(port, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  }
});
