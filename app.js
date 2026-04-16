
require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const confessionRoutes = require('./routes/confessionRoutes')

app.use('/api/v1/confessions', confessionRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
