const express = require('express');
const fs = require('fs');
const port = 3000;

const app = express();

const openHtml = (page) => { 
  app.get('/', (req, res) => {
    fs.readFile(`${__dirname}/${page}`, (err, data) => {

        res.end(data);
    })
    });
  };

openHtml('index.html');

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});