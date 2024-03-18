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
    
    // if (Number(req.body.shorts_width) < 28 || Number(req.body.shorts_width) > 46) {
    //     return next(errorHandler(400, "Short widths size must be between 28 to 46"));
    // }
    // if (Number(req.body.pants_width) < 28 || Number(req.body.pants_width) > 46) {
    //     return next(errorHandler(400, "Pants widths size must be between 28 to 46"));
    // }
    // if (Number(req.body.pants_length) < 28 || Number(req.body.pants_length) > 42) {
    //     return next(errorHandler(400, "Pants lenght size must be between 28 to 42"));
    // }

    // if (req.body.shirt_size) {
    //     if (req.body.shirt_size.toLowerCase() != "s" || req.body.shirt_size.toLowerCase() != "m" || req.body.shirt_size.toLowerCase() != "l" || req.body.shirt_size.toLowerCase() != "xl" || req.body.shirt_size.toLowerCase() != "xxl" || req.body.shirt_size.toLowerCase() != "2xl" || req.body.shirt_size.toLowerCase() != "3xl" || req.body.shirt_size.toLowerCase() != "4xl" || req.body.shirt_size.toLowerCase() != "5xl" || req.body.shirt_size.toLowerCase() != "6xl") {
    //         return next(errorHandler(400, "Shirt size must be between S to 6XL"));
    //     }
    // }
    
    // if (req.body.sweatshirt_size) {
    //     if (req.body.sweatshirt_size.toLowerCase() != "s" || req.body.sweatshirt_size.toLowerCase() != "m" || req.body.sweatshirt_size.toLowerCase() != "l" || req.body.sweatshirt_size.toLowerCase() != "xl" || req.body.sweatshirt_size.toLowerCase() != "xxl" || req.body.sweatshirt_size.toLowerCase() != "2xl" || req.body.sweatshirt_size.toLowerCase() != "3xl" || req.body.sweatshirt_size.toLowerCase() != "4xl" || req.body.sweatshirt_size.toLowerCase() != "5xl" || req.body.sweatshirt_size.toLowerCase() != "6xl") {
    //         return next(errorHandler(400, "Sweatshirt size must be between S to 6XL"));
    //     }
    // }

    // if (req.body.gender) {
    //     if (req.body.gender.toLowerCase() != "m" || req.body.gender.toLowerCase() != "f" || req.body.gender.toLowerCase() != "n" || req.body.gender.toLowerCase() != "neutral") {
    //         return next(errorHandler(400, "Please enter a valid gender (M,F,N) "));
    //     }
    // }

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