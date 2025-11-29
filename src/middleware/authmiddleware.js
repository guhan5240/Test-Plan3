import jwt from 'jsonwebtoken'
const { verify } = jwt

const authMiddleware = (roles) => (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (authHeader) {
      const token = authHeader.split(' ')[1]
      verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          return res.sendStatus(403)
        }
        req.user = user
        if (roles.includes(user.role)) {
          return next()
        } else {
          return res.sendStatus(403)
        }
      })
    } else {
      return res.sendStatus(401)
    }
  } catch (err) {
    console.log(err)
  }
}
export default authMiddleware