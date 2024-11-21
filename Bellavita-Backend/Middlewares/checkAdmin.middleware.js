// this middleware give the authorization / access / permit to the specific users or admin to perform certain actions

const checkAccess = (role) => {
    return (req, res, next) => {
        try {
            if (role === req.user.role) {
                next()
            } else {
                res.status(403).json({ message: `You are not authorized to perform this action` })
            }
        } catch (error) {
            res.status(500).json({ message: `Error ❌ : ${error}` })
        }
    }
}

module.exports = checkAccess;

