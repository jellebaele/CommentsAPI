import { Router } from 'express';
import healthController from '../controller/health.controller';
import commentController from '../controller/product.controller';

const v1Router = Router();

v1Router.use('/comment', commentController());
v1Router.use('/health', healthController());

export default v1Router;
