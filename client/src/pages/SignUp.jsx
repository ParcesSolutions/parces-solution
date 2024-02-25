import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import parces_small_logo from '../logo/parces_small_logo.jpg';
import { Button, Label, TextInput } from 'flowbite-react';

function SignUp() {
  const [formData, setFormData] = useState({});

    /* Keep track of input in field. keep previous inputs for other fields, save inputs for each field Id */
   const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
   }; 
    
    /* handle submission of form data */
    const handleSubmit = async (e) => {
        e.preventDefault(); /* prevents form from refreshing */
        try {
            const res = await fetch('/api/auth/uniform-signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });
            const data = await res.json();
        } catch (error) {
            
        }
    }
  
  return (
    <div className='min-h-screen mt-20 flex justify-center'>
        <div className=''>
            <div className='p-3 max-w-3xl mx-auto md:items-center'>
                <div className='flex justify-center items-center'>
                    <Link to='/' className=''>
                        <span><img className='w-60 rounded-md ml-3' src={parces_small_logo} alt="parces solutions logo"/></span>
                        <p className='self-center font-semibold pt-2 text-4xl'>Parces Solutions</p>
                    </Link>
                </div>
                <p className='text-sm mt-5 w-80 mx-auto text-center font-mono'>
                    Please enter your information to get started ordering your Volvo uniforms
                </p>
                <form onSubmit={handleSubmit}> 
                    <div className='mt-5 flex gap-6 justify-center'>
                        <div>
                            <Label value='Your Volvo A Number' />
                            <TextInput 
                                type='text'
                                placeholder='ex A12345'
                                id='a_number'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label value='Your Volvo Employee Number' />
                            <TextInput 
                                type='number'
                                placeholder='Employee Number'
                                id='employee_number'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='mt-1 flex gap-8 justify-center'>
                        <div>
                            <Label value='Your First Name' />
                            <TextInput 
                                type='text'
                                placeholder=''
                                id='firstname'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label value='Your Last Name' />
                            <TextInput 
                                type='text'
                                id='lastname'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                     <div className='mt-1'>
                        <div>
                            <Label value='Your Email' />
                            <TextInput 
                                type='email'
                                placeholder='johndoe@gmail.com'
                                id='email'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='mt-1 flex gap-8 justify-center'>
                        <div>
                            <Label value='Password' />
                            <TextInput 
                                type='password'
                                placeholder='•••••••••'
                                id='password'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label value='Confirm Password' />
                            <TextInput 
                                type='password'
                                placeholder='•••••••••'
                                id='confirmPassword'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='mt-1'>
                        <div>
                            <Label value='What address will you like your uniforms shipped to?' />
                            <TextInput 
                                type='text'
                                placeholder='Stree, City, State, Zipcode'
                                id='address'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='mt-1 flex gap-2 justify-center'>
                        <div className='flex-1 w-2'>
                            <Label value='Shirt Size' />
                            <TextInput 
                                type='text'
                                placeholder='S,M,L,XL --> 6XL'
                                id='shirt_size'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex-1 w-2'>
                            <Label value='Sweatshirt Size' />
                            <TextInput 
                                type='text'
                                placeholder='S,M,L,XL --> 6XL'
                                id='sweatshirt_size'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex-1 w-2'>
                            <Label value='Shorts Width' />
                            <TextInput 
                                type='text'
                                placeholder='Size 28 to 46'
                                id='shorts_width'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='mt-1 flex gap-2 justify-center'>
                        <div className='flex-1 w-2'>
                            <Label value='Pants Width' />
                            <TextInput 
                                type='text'
                                placeholder='28 to 46'
                                id='pants_width'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex-1'>
                            <Label value='Pants Length' />
                            <TextInput 
                                type='text'
                                placeholder='28 to 42'
                                id='pants_length'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex-1'>
                            <Label value='Gender' />
                            <TextInput 
                                type='text'
                                placeholder='M, F, or Neutral'
                                id='gender'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <Button type='submit' className='bg-blue-800 text-white mt-8 px-10 py-1.5 mx-auto hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700'>
                        Create Account
                    </Button>
                </form>
                <div className='mt-4 flex gap-1 justify-center'>
                    <p className=''>Already have an account?</p>
                    <Link to='/sign-in' className='text-blue-600 font-bold'>Sign In</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp