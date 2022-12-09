const requireAuth = (req, res, next) => {

// verify user authentication
const { authorization } = req.headers

if (!authorization) {
    return res.status(401).json({error: 'Auth token required'})
}

}