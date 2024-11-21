const jwt = require('jsonwebtoken');
const userModel = require('../Models/user.model');

// this middleware check if the user is authenticated or not
const Authenticate = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(404).json({ message: `Authorization Header Not Found Token Not Provided` });
        }

        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(404).json({ message: `Token Not Found` });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (!decoded) {
            return res.status(401).json({ message: `Token Expired. Please Login Again.` });
        }

        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(404).json({ message: `User Not Found` });
        }
        req.user = user;
        req.token = token;
        next();

    } catch (error) {
        console.log(`Error in authorization middleware : ${error}`); 
        res.status(401).json({ message: `Invalid Token ${error}` });
    }
};

module.exports = Authenticate;
