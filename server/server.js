const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const zipCodes = require('./zipcodes.json');

app.get('/', (req, res) => {
  if (zipCodes[req.query.zipcode]) {
    res.status(200).send(zipCodes[req.query.zipcode])
  } else {
    res.status(404).send("Not Found")
  }
});



const PORT = 3001;

app.listen(PORT, () => console.log('we are listening on port ' + PORT));