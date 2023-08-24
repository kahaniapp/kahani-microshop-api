import express, { Express, Request, Response } from 'express';

import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

import apiV1Router from './api/v1';

dotenv.config();

const app: Express = express();
// Fall back to 4000 if no port is specified
const port = process.env.PORT || 4000;

/************************************************************************************
 *                                Middleware                                        *
 ************************************************************************************/

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Enable CORS
app.use(
  cors({
    origin: '*',
  })
);
// Log requests
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

/************************************************************************************
 *                                 Routers                                          *
 ************************************************************************************/

// API v1 router (/api/v1/*)
app.use('/api/v1', apiV1Router);

/************************************************************************************
 *                         Server Routes and Setup                                  *
 ************************************************************************************/

// Default route
app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// Start the express server
app.listen(port, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  }
});
