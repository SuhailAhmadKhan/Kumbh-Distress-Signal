const express = require('express')
const router = express.Router()

const {
  getLatestSignal,
  createSignal,
  resolveSignal
} = require('../controllers/signal')

router.route('/').get(getLatestSignal).post(createSignal)
router.route('/:id').patch(resolveSignal)

module.exports = router
