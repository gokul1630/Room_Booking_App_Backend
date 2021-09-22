const mongoose = require('mongoose')

const room = mongoose.Schema({
  name: { type: String },
  address: { type: String },
  description: { type: String, required: true },
  photos: { type: [String] },
  owner: { ref: 'User', type: mongoose.Schema.Types.ObjectId, required: true },
  price: { type: Number },
  minStay: { type: Date, default: new Date() },
  maxStay: { type: Date, default: new Date() },
  booked: { type: Boolean },
})
module.exports = mongoose.model('Room', room, 'Room')
