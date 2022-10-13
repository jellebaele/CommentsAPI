import { Request, Response, Router } from 'express';

const healthController = (): Router => {
  const router = Router();

  router.get('/', async (req: Request, res: Response) => {
    return res.sendStatus(200);
  });

  return router;
};

export default healthController;
