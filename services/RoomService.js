const RoomModel = require('../model/RoomModel')
const UserModel = require('../model/UserModel')

exports.addNewRoomService = async (data) => {
  return await RoomModel.create(data)
}

exports.getAllRoomService = async (id) => {
  return await RoomModel.find(id)
}

exports.getOtherRoomsService = async (id) => {
  return await UserModel.findById(id).populate('roomList').exec()
}

exports.updateRoomService = async (data) => {
  return await RoomModel.findByIdAndUpdate(data._id, data, { new: true })
}

exports.deleteRoomService = async (data) => {
  return await RoomModel.findByIdAndDelete(data._id)
}
