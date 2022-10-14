import { Request, Response, Router } from 'express';

const postController = (): Router => {
  const router = Router();

  router.post('/', async (req: Request, res: Response) => {
    return res.send('Test');
  });

  return router;
};

export default postController;
