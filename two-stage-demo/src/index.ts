import express from 'express';
import { add } from './lib';
import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));

const PORT = 8080;

app.get('/', (_, res) => {
  const message = 'Hello World!';
  return res.send({ message: message });
});

app.get('/another', (_, res) => {
  const value = add(1, 3);
  return res.send({ message: value });
});

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});
