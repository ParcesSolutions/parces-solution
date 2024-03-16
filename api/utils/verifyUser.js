import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
    //get token from browser cookie
    const token = req.cookies.access_token;
    if(!token){
        return next(errorHandler(401, 'Unauthorized'));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) {
            return next(errorHandler(401, 'Unauthorized'));
        }

        //send user data along with the request
        req.user = user;
        next();
    });
};
