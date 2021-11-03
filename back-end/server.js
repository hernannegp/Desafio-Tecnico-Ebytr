const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => {
  const message = `Example app listening on ${port}`;
  global.console.log(message);
});
