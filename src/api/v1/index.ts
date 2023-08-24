import { Router } from 'express';

import exampleRouter from './routes/example';

const apiV1Router: Router = Router();

apiV1Router.use('/example', exampleRouter);

export default apiV1Router;
