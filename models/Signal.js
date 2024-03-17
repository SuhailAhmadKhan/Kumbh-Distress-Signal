const mongoose = require('mongoose')

const SignalSchema = new mongoose.Schema({
  pcx: {
    type: mongoose.Decimal128,
    required: [true, 'must provide coordinates'],
  },
  pcy: {
    type: mongoose.Decimal128,
    required: [true, 'must provide coordinates'],
  },
  pcz: {
    type: mongoose.Decimal128,
    required: [true, 'must provide coordinates'],
  },
  prx: {
    type: mongoose.Decimal128,
    required: [true, 'must provide rotation'],
  },
  pry: {
    type: mongoose.Decimal128,
    required: [true, 'must provide rotation'],
  },
  prz: {
    type: mongoose.Decimal128,
    required: [true, 'must provide rotation'],
  },
  acx: {
    type: mongoose.Decimal128,
    required: [true, 'must provide coordinates'],
  },
  acy: {
    type: mongoose.Decimal128,
    required: [true, 'must provide coordinates'],
  },
  acz: {
    type: mongoose.Decimal128,
    required: [true, 'must provide coordinates'],
  },
  arx: {
    type: mongoose.Decimal128,
    required: [true, 'must provide rotation'],
  },
  ary: {
    type: mongoose.Decimal128,
    required: [true, 'must provide rotation'],
  },
  arz: {
    type: mongoose.Decimal128,
    required: [true, 'must provide rotation'],
  },
  time: {
    type: String,
    default: function() {
      const date = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour12: false, weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return date.toLocaleString('en-IN', options);
    }
  },
  isResolved: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Signal', SignalSchema)
