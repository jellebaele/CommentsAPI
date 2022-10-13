import express, { Express } from 'express';
import setupExpress from './express';

const setupServer = (): Express => {
  const app = express();

  setupExpress(app);

  return app;
};

export default setupServer;
