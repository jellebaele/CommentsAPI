import { Router } from 'express';
import healthController from '../controller/health.controller';
import postController from '../controller/post.controller';

const v1Router = Router();

v1Router.use('/post', postController());
v1Router.use('/health', healthController());

export default v1Router;
