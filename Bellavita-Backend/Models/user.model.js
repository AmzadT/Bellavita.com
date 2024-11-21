const mongoose = require('mongoose')

// users model and schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Username is required'],
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [50, 'Username cannot be more than 50 characters long'],
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [18, 'Must be at least 18 years old'],
        max: [99, 'Cannot be older than 99 years']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
        
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        trim: true,
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
            'Password must include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character'
          ]
    },
    gender: {
        type: String,
        required: [true, 'gender is required'],
        enum: ['male', 'female', 'Male', 'Female', 'other'],
    },
    mobileNo: {
        type: String, match: [/^(\()?\d{3}(\))?(|\s)?\d{3}(|\s)\d{4}$/, 'Phone number must be exactly 10 digits and valid phone numbers']
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum: ['user', 'admin', 'Admin', 'User'],
        default: ['user']
    },
    
}, {
    timestamps: true,
    versionKey: false
})

const userModel = mongoose.model('User', UserSchema)

module.exports = userModel;