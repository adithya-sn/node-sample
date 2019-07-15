const express = require('express')
const app = express()
const port = 80

app.get('/foo', (req, res) => res.send('hello fooo!'))

app.listen(port)
