var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello from another dimension!')
})

app.get('/prometric', function (req, res) {
  res.send('Hello from prometric dimension!')
})



app.listen(7788, function () {
  console.log('Example app listening on port 7788!')
})