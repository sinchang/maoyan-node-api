const express = require('express')

const app = express()

const routes = require('./routes/index')

app.use('/v1', routes)

app.use('/docs', express.static('docs'))

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server running in port ${port}`)
})
