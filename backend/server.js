require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const app = express();

// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.DATABASE_URL)
// .then(() => {
// listen for requests
// app.listen(process.env.PORT, () => {
//     console.log('connected to db & on port', process.env.PORT)
// })
// })
// .catch((error) => {
//     console.log(error)
// })


