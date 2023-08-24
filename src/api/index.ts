import { Router } from 'express';

import exampleRouter from './routes/example';

const apiRouter: Router = Router();

apiRouter.use('/example', exampleRouter);

export default apiRouter;
