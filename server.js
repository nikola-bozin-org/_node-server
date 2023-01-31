const express = require('express');
const helmet = require('helmet');
const app = express();
const port = 9876;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello, GET request');
});

app.post('/', (req, res) => {
  res.send(`Hello, POST request. Body: ${JSON.stringify(req.body)}`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});