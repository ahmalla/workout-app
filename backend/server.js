require('dotenv').config();

const express = require('express')

const app = express();

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the app' })
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('on port', process.env.PORT)
})