const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

// USER MODEL
const userSchema = new Schema({
    username: {
        type : String,
        required : [true, "username is required"]
    },
    email: {
        type : String,
        required : [true, "email is required"],
        unique : true,
        validate : [isEmail, "Please provide a valid email"]
    },
    password: {
        type : String,
        required : [true, "This field is required"],
        minLength : [6, "Password should contain the minimum of 6 characters"]
    },
    phone: {
        type : String,
        required : [true, "This field is required"],
    },
    role: {
        required : [true, "This field is required"],
        type : String
      }, // "seller" or "buyer"
    profilePicture: String // URL of the profile picture if needed
  }
  , { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

const User = model('User', userSchema);

const buyerSchema = new Schema({
    buyer_id : String,
    username: {
        type : String
    },
    buyer_phone : Number,
    email : String
}, {timestamps : true})

const materialSchema = new Schema({
    user : {
        type : Object,
        required : [true, "Id is required"]
    },
    materialName: {
        type: String,
        required: [true, 'Material name is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    pricePerKg: {
        type: Number,
        required: [true, 'Price per kg is required']
    },
    buyers : [buyerSchema]
}, { timestamps: true });

const Material = model('materials', materialSchema);


module.exports = { User, Material };
