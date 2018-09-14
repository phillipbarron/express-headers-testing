const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());
app.get('/', (req, res) => res.send('ckeck the headers'));

app.listen(3000, () => console.log('running 😄...'));