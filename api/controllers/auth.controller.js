import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
import {errorHandler} from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { a_number, employee_number, password, firstname, lastname, email, address, shirt_size, sweatshirt_size, shorts_width, pants_width, pants_length, gender } = req.body;

    /* encrypt password for security */
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(password, salt); 
    
    /* set res equal to User model schema */
    const newUser = new User({ 
        a_number, 
        employee_number, 
        firstname,
        // password,
        password: hashPassword, 
        lastname, 
        email, 
        address, 
        shirt_size, 
        sweatshirt_size, 
        shorts_width, 
        pants_width, 
        pants_length, 
        gender
    });

    try {
        await newUser.save();
        res.json('Signup successful')
    } catch (error) {
        next(error);    
    }
};

export const signin = async (req, res, next) => {
    const { a_number, employee_number, password } = req.body;

    // first check to make sure all fields are filled in during sign in
    if (!a_number || !employee_number || !password || a_number === '' || employee_number === '' || password === '') {
        next(errorHandler(400, 'All fields are required'));
    }

    try {
        //need to make async since we have to wait for results
        const validUser = await User.findOne({employee_number});
        if (!validUser) {
            return next(errorHandler(404, 'Employee Number invalid'));
        }
        

        const validANumber = await User.findOne({a_number});
        if (!validANumber) {
            return next(errorHandler(404, 'A Number invalid'));
        }
        

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid password'));
        }
        
        //create token if all credentials are correct
        const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET);

        //sperate encrypted password from the rest of the response
        const { password: pass, ...rest} = validUser._doc;

        //add token to cookie
        res
            .status(200)
            .cookie('access_token', token, {
                httpOnly: true
            })
                .json(rest);
        
    } catch (error) {
        next(error);
    }
};