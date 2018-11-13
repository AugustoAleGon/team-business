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

// Allow cors
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers',
    'Authorization, Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Expose-Headers', 'xsrf-token')
  res.header('Access-Control-Allow-Methods',
    'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Max-Age', 600)
  next()
})
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
  res.status(200).send('OK')
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
