const { User, Material, Collection } = require('../models/models'); // Import all models from models file
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { default: mongoose } = require('mongoose');

const sign_up = async (req, res) => {
    try {
        const { username, email, password, phone, role } = req.body;

        const new_user = await User.create({
            username,
            email,
            password,
            phone,
            role
        });

        
        const token = jwt.sign({ userid: new_user._id }, 'frankie123', {
            expiresIn: '3d' 
        });

       
        res.cookie('auth_token', token, {
            httpOnly: true, 
            maxAge: 3 * 24 * 60 * 60 * 1000 
        });

        
        res.status(201).json({
            status: 'success',
            data: {
                user: new_user
            }
        });
    } catch (error) {
       
        if (error.code === 11000) {
            return res.status(400).json({ err: "Email already exists" });
        }

        
        const err_messages = {
            username_err: "",
            email_err: "",
            password_err: "",
            phone_err: "",
            address_err: "",
            userType_err: ""
        };

        
        if (error.errors) {
            Object.values(error.errors).forEach(({ properties }) => {
                switch (properties.path) {
                    case 'username':
                        err_messages.username_err = properties.message;
                        break;
                    case 'email':
                        err_messages.email_err = properties.message;
                        break;
                    case 'password':
                        err_messages.password_err = properties.message;
                        break;
                    case 'phone':
                        err_messages.phone_err = properties.message;
                        break;
                    case 'address':
                        err_messages.address_err = properties.message;
                        break;
                    case 'userType':
                        err_messages.userType_err = properties.message;
                        break;
                }
            });
        }

        return res.status(400).json({
            status: 'fail',
            errors: err_messages
        });
    }
};

const get_currentUser = async (req, res) => {
    try {
        const id = req.user._id;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            res.status(401).json({err : "unauthorised"})
        }
        const current_user = await User.findById(id);
        res.status(200).json({
            status: 'success',
            data: {
                username : current_user.username,
                email : current_user.email,
                phone : current_user.phone,
                role : current_user.role
            }
        })
    } catch (error) {
        return res.status(500).json({err : "internal server error"})
    }
}
const sign_in = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ err: "Invalid email or password" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ err: "Invalid email or password" });
        }

        const token = jwt.sign({ userid: existingUser._id }, 'frankie123', {
            expiresIn: '3d' 
        });

        res.cookie('auth_token', token, {
            httpOnly: true, // Secure cookie
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds
        });

        res.status(200).json({
            status: 'success',
            data: {
                user: existingUser
            }
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            err: 'Something went wrong. Please try again later.'
        });
    }
};


const createMaterial = async (req, res) => {
    try {
        const { materialName, description, pricePerKg } = req.body;

        const current_user = await User.findById(req.user._id);

        const newMaterial = await Material.create({
            user : [{
                userId : current_user._id,
                username : current_user.username,
                email : current_user.email,
                phone : current_user.phone,
            }],
            materialName,
            description,
            pricePerKg
        });

        res.status(201).json({
            status: 'success',
            data: {
                material: newMaterial
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message 
        });
    }
};

const get_materials = async (req, res) => {
    try {
        const all_materials = await Material.find({});
        res.status(200).json(all_materials)
    } catch {
        res.status(500).json({err : "internal server error"})
    }
}

const buy_material = async (req, res) => {
    try {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({err : "Material not found"})
        }
        const material = await Material.findByIdAndUpdate({_id : id}, {
            $push :{
                buyers : {
                    material_id : req.user.id,
                    username : req.body.username,
                    buyer_phone : req.body.buyer_phone,
                    email : req.body.email
                }
            }
        })
            
        res.status(200).json(material)

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    sign_up,
    sign_in,
    get_currentUser,
    createMaterial,
    buy_material,
    get_materials
};
