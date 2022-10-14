const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));

const PORT = 3000;


app.get('/', (_, res) => {
  return res.json({ message: 'Hello World!'});
});

app.listen(PORT, () => {
  console.log(`Start listening in port: ${PORT}`);
});
