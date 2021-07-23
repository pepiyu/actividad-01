const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! The sooner I fall behind, the more time I have to catch up.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})