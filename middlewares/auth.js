const jwt = require('jsonwebtoken')
const { findUserService } = require('../services/UserService')
const auth = async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  }
  if (!token) {
    return res.status(403).send({ message: 'Auth Token missing' })
  }
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET)
    let users = await findUserService(decoded.id)
    if (!users) {
      return res.status(403).send({ message: 'No users Found' })
    }
    req.user = users

    next()
  } catch (error) {
    console.log(error)
  }
}
module.exports = auth
