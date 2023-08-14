const express = require('express')
const urlRoute = require('./routes/url')
const { connectionDB } = require('./connection')
const app = express()
const PORT = 8000;

connectionDB("mongodb://127.0.0.1:27017/url-shortner")
app.use(express.json())
app.use('/url', urlRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
