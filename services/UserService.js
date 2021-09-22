const User = require('../model/UserModel')

exports.findUserService = async (userId) => {
  return await User.findById(userId)
}

exports.signInService = async (email) => {
  return await User.findOne({ email })
}

exports.signUpService = async (data) => {
  return await User.create(data)
}

exports.addRoomToUser = async (userId, itemId) => {
  return await User.findByIdAndUpdate(userId, {
    $addToSet: { userRoomList: itemId },
  })
}
exports.addRoomToOwner = async (userId, itemId) => {
  return await User.findByIdAndUpdate(userId, {
    $addToSet: { roomList: itemId },
  })
}
exports.updateUserService = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true })
}
