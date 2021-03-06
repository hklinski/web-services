const express = require('express')
const helmet = require("helmet")
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/soap', (req, res) => {
    res.send('mydlo')
  })

app.get('/rest', (req, res) => {
    res.send('reszta')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})