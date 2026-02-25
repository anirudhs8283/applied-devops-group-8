const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['clerk', 'doctor', 'nurse'],
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }},
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('User', userSchema);


//this file defines the User model using Mongoose. It includes fields for fullName, email, role, passwordHash, and isActive. The email field is unique and required, and the role field is an enum that can only be 'clerk', 'doctor', or 'nurse'. 
// The schema also includes timestamps to track when each user document is created and last updated.