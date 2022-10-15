import express, { Express } from 'express';
import v1Router from '../../api/v1';

function setupExpress(app: Express): void {
  app.use(express.json());
  app.use(v1Router);

  console.log('Express setup complete');
}

export default setupExpress;
