require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express();

// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.DATABASE_URL)
.then(() => {})
.catch((error) => {
    console.log(error)
})


// listen for requests
app.listen(process.env.PORT, () => {
    console.log('on port', process.env.PORT)
})