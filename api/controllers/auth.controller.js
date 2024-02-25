import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';

export const signup = async (req, res, next) => {
    const { a_number, employee_number, password, firstname, lastname, email, address, shirt_size, sweatshirt_size, shorts_width, pants_width, pants_length, gender } = req.body;

    

    /* encrypt password for security */
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt); 
    
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


}