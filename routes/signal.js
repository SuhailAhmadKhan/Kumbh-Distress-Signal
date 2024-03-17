const express = require('express')
const router = express.Router()

const {
  getLatestSignal,
  createSignal
} = require('../controllers/signal')

router.route('/').get(getLatestSignal).post(createSignal)

module.exports = router
