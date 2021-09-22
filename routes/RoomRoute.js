const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  addRooms,
  getRooms,
  updateRoom,
  deleteRoom,
} = require('../controllers/RoomController')

router.get('/getRooms', auth, getRooms)
router.put('/addRoom', auth, addRooms)
router.patch('/updateRoom', auth, updateRoom)
router.delete('/deleteRoom', auth, deleteRoom)

module.exports = router
