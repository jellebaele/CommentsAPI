import { Router } from 'express';
import healthController from '../controller/health.controller';
import productController from '../controller/product.controller';

const v1Router = Router();

v1Router.use('/comment', productController());
v1Router.use('/health', healthController());

export default v1Router;
