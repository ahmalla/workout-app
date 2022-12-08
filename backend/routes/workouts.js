const express = require('express')
const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({ message: 'GET all workouts' })
})

module.exports = router