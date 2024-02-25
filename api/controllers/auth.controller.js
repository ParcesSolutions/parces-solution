import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { a_number, employee_number, password, firstname, lastname, email, address, shirt_size, sweatshirt_size, shorts_width, pants_width, pants_length, gender } = req.body;

    if (!a_number || !employee_number || !password || !firstname || !lastname || !email || !address || !shirt_size || !sweatshirt_size || !shorts_width || !pants_width || !pants_length || !gender || 
        a_number === '' || employee_number === '' || password === '' || firstname === '' || lastname === '' || email === '' || address === '' || shirt_size === '' || sweatshirt_size === '' || shorts_width === '' || pants_width === '' || pants_length === '' || gender === '') {
        
        next(errorHandler(400, 'All fields are required'));
    }

    else if (!email.includes('@')) {
        next(errorHandler(400, 'Please enter a valid email'));
    }

    /* encrypt password for security */
    const hashPassword = bcrypt.hashSync(password, 10); 
    
    /* set res equal to User model schema */
    const newUser = new User({ 
        a_number, 
        employee_number, 
        firstname,
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


}