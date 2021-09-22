const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const user = mongoose.Schema({
  user: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: Number },
  password: { type: String, required: true },
  isOwner: { type: Boolean },
  userRoomList: { ref: 'Room', type: [mongoose.Schema.Types.ObjectId] },
  roomList: { ref: 'Room', type: [mongoose.Schema.Types.ObjectId] },
})
user.methods.getToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  })
}
user.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}
module.exports = mongoose.model('User', user, 'User')
