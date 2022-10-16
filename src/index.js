const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3001

const route = require('./routes')

app.use(bodyParser.json()) // for parsing application/json ( khi sử dụng gửi từ code Javascript)
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, 'public')))
//Template engine-pug
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'resources/views')) // Set folder view for pug

//HTTP logger
app.use(morgan('combined'))

const users = [
  { id: 1, name: 'John'},
  { id: 2, name: 'Linda'}
]

//Route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

