const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema({
  title:{
    type: String,
    required: [true, 'must provide title'],
    maxlength: 50,
  },
  description:{
    type: String,
    required: [true, 'must provide description'],
    maxlength: 250,
  }
}, { timestamps: true });

module.exports = mongoose.model('Notification', NotificationSchema)
