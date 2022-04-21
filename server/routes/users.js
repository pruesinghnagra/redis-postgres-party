const express = require('express')

const db = require('../db/users')

const router = express.Router()

module.exports = router

// api/v1/users
router.get('/', (req, res) => {
  db.getAllUsers()
    .then((users) => {
      res.status(200).json(users)
      return null
    })
    .catch((err) => {
      res.status(500).json({ message: 'DATABASE ERROR: ' + err.message })
    })
})
