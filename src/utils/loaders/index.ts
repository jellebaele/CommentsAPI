import express, { Express } from 'express';
import setupDatabase from './database';
import setupExpress from './express';

const setupServer = (): Express => {
  const app = express();

  try {
    setupExpress(app);
    setupDatabase();
  } catch (error) {
    console.log('Something went wrong during setup');
  }

  return app;
};

export default setupServer;
