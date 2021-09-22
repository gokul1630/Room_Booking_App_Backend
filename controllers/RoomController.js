const {
  getAllRoomService,
  addNewRoomService,
  updateRoomService,
  deleteRoomService,
  getOtherRoomsService,
} = require('../services/RoomService')
const { addRoomToOwner } = require('../services/UserService')

const addRooms = async (req, res) => {
  try {
    const ownerId = req.user._id
    const data = {
      ...req.body,
      owner: ownerId,
    }
    const rooms = await addNewRoomService({ ...data })
    const ownerData = await addRoomToOwner(ownerId, rooms._id)
    if (rooms && ownerData) {
      res.status(200).json(rooms)
    }
  } catch (error) {
    console.log(error)
  }
}
const getRooms = async (req, res) => {
  let rooms
  try {
    if (Object.keys(req.query).length !== 0) {
      rooms = await getAllRoomService({ ...req.query })
    } else {
      rooms = await getAllRoomService()
    }
    if (rooms) {
      res.status(200).json(rooms)
    }
  } catch (error) {
    console.log(error)
  }
}

const getOtherRoomsOfOwner = async (req, res) => {
  try {
    const room = await getOtherRoomsService(req.body._id)
    if (room) {
      res.status(200).json(room)
    }
  } catch (error) {
    console.log(error)
  }
}

const updateRoom = async (req, res) => {
  try {
    const rooms = await updateRoomService({ ...req.body })
    res.status(200).json(rooms)
  } catch (error) {
    console.log(error)
  }
}

const deleteRoom = async (req, res) => {
  try {
    const rooms = await deleteRoomService(req.body)
    res.status(200).json(rooms)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getRooms,
  getOtherRoomsOfOwner,
  addRooms,
  updateRoom,
  deleteRoom,
}
