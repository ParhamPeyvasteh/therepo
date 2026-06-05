import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hi from the repo');
});

export default app;
