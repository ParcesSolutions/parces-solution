import User from "../models/user.model.js";

export const signup = async (req, res) => {
    let { a_number, employee_number, firstname, lastname, email, address, shirt_size, sweatshirt_size, shorts_width, pants_width, pants_length, gender } = req.body;

    if (!a_number || !employee_number || !firstname || !lastname || !email || !address || !shirt_size || !sweatshirt_size || !shorts_width || !pants_width || !pants_length || !gender || 
        a_number === '' || employee_number === '' || firstname === '' || lastname === '' || email === '' || address === '' || shirt_size === '' || sweatshirt_size === '' || shorts_width === '' || pants_width === '' || pants_length === '' || gender === '') {
        
        return res.status(400).json({ message: 'All fields are requried' });
    }

    if (!email.includes('@')) {
        return res.status(400).json({ message: 'Please enter a valid email' });
    }


    shirt_size = shirt_size.toLowerCase();
    sweatshirt_size = sweatshirt_size.toLowerCase();

    const newUser = new User({ 
        a_number, 
        employee_number, 
        firstname, 
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

    await newUser.save();
    res.json('Signup successful')
}