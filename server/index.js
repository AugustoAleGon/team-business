const express = require('express')
const formData = require('express-form-data')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(formData.parse())
app.use(formData.format())
app.use(formData.stream())
app.use(formData.union())

var { data } = require('./data/index')

// This responds with "Hello World"
app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/products', (req, res) => {
  res.json(data())
})

app.post('/contact', (req, res) => {
  console.log(req.body)
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
