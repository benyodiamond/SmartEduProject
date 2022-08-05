const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('index sayfası');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App stated on port ${port}`);
});