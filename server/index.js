const express = require('express');
const proxy = require('http-proxy');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static('public'));
app.use('/api', proxy('http://localhost:3000'));



app.listen(port, () => console.log(`proxy server listening to locolhost${port}`));