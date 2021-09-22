require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connect = require('./config/mongodb')
const user = require('./routes/UserRoute')
const room = require('./routes/RoomRoute')
const PORT = process.env.PORT || 1234

app.use(cors())
app.use(express.json())

app.use('/user', user)
app.use('/room', room)

app.listen(PORT, async () => await connect(PORT))
