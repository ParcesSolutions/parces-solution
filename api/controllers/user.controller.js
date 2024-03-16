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
    if (req.body.password) {
        if(req.body.password.length < 6) {
            return next(errorHandler(400, "Password must be at least 6 characters"));
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (Number(req.body.shorts_width) < 28 || Number(eq.body.shorts_width) > 46) {
        return next(errorHandler(400, "Short widths size must be between 28 to 46"));
    }
    if (Number(req.body.pants_width) < 28 || Number(eq.body.pants_width) > 46) {
        return next(errorHandler(400, "Pants widths size must be between 28 to 46"));
    }
    if (Number(req.body.pants_length) < 28 || Number(eq.body.pants_length) > 42) {
        return next(errorHandler(400, "Pants lenght size must be between 28 to 42"));
    }
    if (req.body.shirt_size.toLowerCase() != "s" || req.body.shirt_size.toLowerCase() != "m" || req.body.shirt_size.toLowerCase() != "l" || req.body.shirt_size.toLowerCase() != "xl" || req.body.shirt_size.toLowerCase() != "xxl" || req.body.shirt_size.toLowerCase() != "2xl" || req.body.shirt_size.toLowerCase() != "3xl" || req.body.shirt_size.toLowerCase() != "4xl" || req.body.shirt_size.toLowerCase() != "5xl" || req.body.shirt_size.toLowerCase() != "6xl") {
        return next(errorHandler(400, "Shirt size must be between S to 6XL"));
    }
};