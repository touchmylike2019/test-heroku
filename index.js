const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const app = express()
const MONGODB_URI = config.mogodburi
app.get('/', (req, res) => {
    res.send(`Hello World`)
})

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }).then(
    () => console.log(`Connect database success`),
    err => console.log(`Connect database fail: ${err}`)
)

app.listen(process.env.PORT || 3000, () => console.log(`Server started on port 3000`))