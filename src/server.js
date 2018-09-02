const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());
app.get('/', (req, res) => res.send('HEADERS'));

app.listen(3000, () => console.log('Fenton!'));