const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(`Hello World ${process.env.DATA}`)
})

app.listen(process.env.PORT || 3000, () => console.log(`Server started on port 3000`))