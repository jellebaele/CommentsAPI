import { Request, Response, Router } from 'express';
import PostService from '../service/PostService';
import {
  CreatePostInput,
  createPostSchema,
  DeletePostInput,
  deletePostSchema,
  GetPostInput,
  getPostSchema,
  UpdatePostInput,
  updatePostSchema,
} from '../schema/post.schema';
import ResourceValidator from '../api/middleware/ResourceValidator';
import TextUtils from '../utils/TextUtils';

const postController = (): Router => {
  const router = Router();
  const postService = new PostService();
  const resourceValidator = new ResourceValidator();

  // Record<string, never> = empty object
  router.post(
    '/',
    resourceValidator.validate(createPostSchema),
    async (
      req: Request<
        Record<string, never>,
        Record<string, never>,
        CreatePostInput['body']
      >,
      res: Response
    ) => {
      try {
        let dto: CreatePostInput['body'] = req.body;

        dto = {
          text: TextUtils.sanitize(dto.text),
        };

        const post = await postService.createPost({ ...dto });
        return res.status(201).send(post);
      } catch (error) {
        return res.status(400).send(error);
      }
    }
  );

  router.get('/', async (req: Request, res: Response) => {
    try {
      const posts = await postService.getPosts();
      return res.send(posts);
    } catch (error) {
      return res.status(400).send(error);
    }
  });

  router.get(
    '/:postId',
    resourceValidator.validate(getPostSchema),
    async (req: Request<GetPostInput['params']>, res: Response) => {
      try {
        const postId = TextUtils.sanitize(req.params.postId);

        const post = await postService.getPostById(postId);
        if (!post) {
          return res.sendStatus(404);
        }

        return res.send(post);
      } catch (error) {
        return res.status(400).send(error);
      }
    }
  );

  router.put(
    '/:postId',
    resourceValidator.validate(updatePostSchema),
    async (
      req: Request<
        UpdatePostInput['params'],
        Record<string, never>,
        UpdatePostInput['body']
      >,
      res: Response
    ) => {
      const postId = TextUtils.sanitize(req.params.postId);
      let dto: UpdatePostInput['body'] = req.body;

      dto = {
        text: TextUtils.sanitize(dto.text),
      };

      const postToUpdate = await postService.getPostById(postId);
      if (!postToUpdate) {
        return res.sendStatus(404);
      }

      const updatedProduct = await postService.updatePostById(postId, dto, {
        new: true,
      });
      return res.send(updatedProduct);
    }
  );

  router.delete(
    '/:postId',
    resourceValidator.validate(deletePostSchema),
    async (req: Request<DeletePostInput['params']>, res: Response) => {
      try {
        const postId = TextUtils.sanitize(req.params.postId);

        const postToDelete = await postService.getPostById(postId);
        if (!postToDelete) {
          return res.sendStatus(404);
        }

        await postService.deletePostById(postId);
        return res.sendStatus(200);
      } catch (error) {
        return res.status(400).send(error);
      }
    }
  );

  return router;
};

export default postController;
