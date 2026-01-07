const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.header('Authorization')

  if (!token) {
    return res.status(401).json({ message: 'No token, access denied' })
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded.id
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({ message: 'Token is not valid' })
  }
}
