import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
    res.json({Message: 'API is working'});
};

export const updateUser = async (req, res, next) => {

    //Check if cookie user id = id of signed in user
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, "You are not authorized to update this user"));
    }

    //Check new data
    if (req.body.password) {

        if (!req.body.confirmPassword) {
            return next(errorHandler(400, "Please confirm new password"));
        }
        if (req.body.password != req.body.confirmPassword) {
            return next(errorHandler(400, "Passwords do not match"));
        }
        if(req.body.password.length < 6) {
            return next(errorHandler(400, "New password must be at least 6 characters"));
        }
        if (req.body.password.includes(' ')) {
            return next(errorHandler(400, "New password can't contain spaces"));
        }

        //Encrypt new valid password
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.email) {
        if (!req.body.email.includes("@")) {
            return next(errorHandler(400, "Please enter a valid email"));
        }
        if (req.body.email.includes(' ')) {
            return next(errorHandler(400, "Please enter a valid email"));
        }
    }

    //Update user
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
            $set: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                address: req.body.address,
                shirt_size: req.body.shirt_size,
                sweatshirt_size: req.body.sweatshirt_size,
                shorts_width: req.body.shorts_width,
                pants_width: req.body.pants_width,
                pants_length: req.body.pants_length,
                gender: req.body.gender
            },
        }, { new: true });

        //Remove password form the rest of the data 
        const { password, ...rest } = updatedUser._doc;

        res.status(200).json(rest);

    } catch (error) {
        next(error);
    }
};


// Function to handle deleting user
export const deleteUser = async (req, res, next) => {
    //make sure that user profile being deleted belongs to user requesting to delete
    // NEED TO ADD CASE WHERE ADMIN IS WANTING TO DELETE OTHER USERS   
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, "You are not authorized to delete this user"));
    }

    try {
        await User.findByIdAndDelete(req.params.userId);
        res.status(200).json("User has been deleted")
    } catch (error) {
        next(error);
    }
};


// Function to handle signing out
export const signOut = (req, res, next) => {
    try {
        res.clearCookie('access_token')
        .status(200)
        .json("User has been signed out successfully");
    } catch (error) {
        next(error);
    }
}