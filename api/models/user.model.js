import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    a_number: {
        type: String,
        required: true,
        unique: true,
    },
    employee_number: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    shirt_size: {
        type: String,
        required: true,
    },
    sweatshirt_size: {
        type: String,
        required: true,
    },
    shorts_width: {
        type: Number,
        required: true,
    },
    pants_width: {
        type: Number,
        required: true,
    },
    pants_length: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;