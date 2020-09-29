const express = require('express');
const app = express();
const port  =  3000;

app.use('/',express.static('public'));
const fs = require('fs');
var obj = '';
fs.readFile('./budget.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});

// const budget;
app.get('/hello',(req,res) => {
    res.send('Hello World!');
})

app.get('/budget',(req,res) => {
    res.json(obj);
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})