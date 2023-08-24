import { Router } from 'express';

const exampleRouter: Router = Router();

exampleRouter.get('/', (_req, res) => {
  res.send('Hello from /api/example!');
});

export default exampleRouter;
