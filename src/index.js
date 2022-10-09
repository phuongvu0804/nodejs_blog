const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3001

app.use(express.static(path.join(__dirname, 'public')))

//Template engine-pug
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'resources/views')) // Set folder view for pug

//HTTP logger
app.use(morgan('combined'))

app.get('/profile', (req, res) => {
    var a = 1;
    var b = 2;

    var c = a + b;
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})