import dotenv from 'dotenv';
import setupServer from './utils/loaders';

dotenv.config();

const app = setupServer();

const port = process.env.PORT || 3000;
app.listen(port, async () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
