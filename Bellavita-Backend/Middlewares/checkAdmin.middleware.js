const checkAdmin = (req, res, next)=>{
    try {
        if(req.user && req.user.role === 'admin'){
            next()
        }else{
            res.status(403).json({message: `You are not authorized to perform this action`})
        }
    } catch (error) {
        res.status(500).json({message: `Error ❌ : ${error}`})
    }
}

module.exports = checkAdmin;

