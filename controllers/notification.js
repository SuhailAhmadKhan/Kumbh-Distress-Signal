const Notification = require('../models/Notification')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getNotification = asyncWrapper(async (req, res) => {
    try {
      const currentTime = new Date();
      const oneHourAgo = new Date(currentTime.getTime() - 60 * 60000);
  
      const notifications = await Notification.find({
        createdAt: { $gte: oneHourAgo, $lte: currentTime }
      }).sort({ createdAt: -1 });
  
      if (!notifications || notifications.length === 0) {
        return res.status(404).json({ message: 'No notifications found within the last hour' });
      }
  
      res.status(200).json({ notifications });
    } catch (err) {
      console.error('Error fetching distress signals within last hour:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  


const createNotification = asyncWrapper(async (req, res) => {
  try {
    const notification = await Notification.create(req.body);
    res.status(201).json({ notification });
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ message: 'Failed to create notification' });
  }
});


module.exports = {
    createNotification,
    getNotification
}
