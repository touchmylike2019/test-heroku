const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const config = require('./config')
const users = require('./controllers/user.controller')
const app = express()

const MONGODB_URI = config.mogodburi

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        connect: 'pass'
    })
})

app.use('/api/users', users)


mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(
        () => console.log(`Connect database success`),
        err => console.log(`Connect database fail: ${err}`)
    )

app.listen(process.env.PORT || 3000, () => console.log(`Server started on port 3000`))