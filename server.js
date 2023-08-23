const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello world! - welcome to icu program - anna nagar ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
