const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080
require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/signin', (req, res) => {
    console.log(req.body)
    res.json("Signin From Server")
})

app.post('/signup', (req, res) => {
    console.log(req.body)
    res.json("Signup From Server")
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})