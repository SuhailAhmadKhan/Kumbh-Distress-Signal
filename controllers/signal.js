const Signal = require('../models/Signal')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getLatestSignal = asyncWrapper(async (req, res) => {
  try {
    const currentTime = new Date();
    const thirtyMinutesAgo = new Date(currentTime.getTime() - 30 * 60000);

    const latestSignal = await Signal.findOne({
      isResolved: false,
      createdAt: { $gte: thirtyMinutesAgo, $lte: currentTime }
    }).sort({ createdAt: -1 }).limit(1);

    if (!latestSignal) {
      return res.status(404).json({ message: 'No unresolved distress signals found' });
    }

    res.status(200).json({ signal: latestSignal });
  } catch (err) {
    console.error('Error fetching latest distress signal:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


const createSignal = asyncWrapper(async (req, res) => {
  try {
    const signal = await Signal.create(req.body);
    res.status(201).json({ signal });
  } catch (error) {
    console.error('Error creating signal:', error);
    res.status(500).json({ message: 'Failed to create signal' });
  }
});


module.exports = {
  getLatestSignal,
  createSignal
}
