const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

const authenticate = async (req, res, next) => {
    try {
        const { auth_token } = req.cookies;
        if(auth_token) {
            jwt.verify(auth_token, 'frankie123', async (err, decoded) => {
                if(err) {
                    console.log(err)
                }
                req.user = await User.findById({_id : decoded.userid})
                next()
            })
        } else {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        console.log(error)
    }
} 


module.exports = authenticate