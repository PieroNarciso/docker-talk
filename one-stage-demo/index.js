const express = require('express');
const app = express();

const PORT = 3000;


app.get('/', (_, res) => {
  return res.json({ message: 'Hello World!'});
});

app.listen(PORT, () => {
  console.log(`Start listening in port: ${PORT}`);
});
