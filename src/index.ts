import express from 'express';

const app = express();

app.listen(3000, async () => {
  console.log('Server is listening at http://localhost:3000');
});
