import { Request, Response, Router } from 'express';
import {
  createPost,
  deletePostById,
  getPostById,
  getPosts,
  updatePostById,
} from '../service/post.service';

const postController = (): Router => {
  const router = Router();

  router.post('/', async (req: Request, res: Response) => {
    try {
      const body = req.body;

      const post = await createPost({ ...body });
      return res.status(201).send(post);
    } catch (error) {
      return res.status(400).send(error);
    }
  });

  router.get('/', async (req: Request, res: Response) => {
    try {
      const posts = await getPosts();
      return res.send(posts);
    } catch (error) {
      return res.status(400).send(error);
    }
  });

  router.get('/:postId', async (req: Request, res: Response) => {
    try {
      const postId = req.params.postId;

      const post = await getPostById(postId);
      if (!post) {
        return res.sendStatus(404);
      }

      return res.send(post);
    } catch (error) {
      return res.status(400).send(error);
    }
  });

  router.delete('/:postId', async (req: Request, res: Response) => {
    try {
      const postId = req.params.postId;

      const postToDelete = await getPostById(postId);
      if (!postToDelete) {
        return res.sendStatus(404);
      }

      await deletePostById(postId);
      return res.sendStatus(200);
    } catch (error) {
      return res.status(400).send(error);
    }
  });

  router.put('/:postId', async (req: Request, res: Response) => {
    const postId = req.params.postId;
    const update = req.body;

    const postToUpdate = await getPostById(postId);
    if (!postToUpdate) {
      return res.sendStatus(404);
    }

    const updatedProduct = await updatePostById(postId, update, { new: true });
    return res.send(updatedProduct);
  });

  return router;
};

export default postController;
