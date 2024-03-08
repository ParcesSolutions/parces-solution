'use client'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import parces_small_logo from '../logo/parces_small_logo.jpg';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

function SignUp() {

  /* state to manage form data */
  const [formData, setFormData] = useState({});
  /* state to manage form data errors */
  const [errorMessage, setErrorMessage] = useState(null);
  /* state to manage loading when submitting form */
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

   /* Keep track of input in field. keep previous inputs for other fields, save inputs for each field Id */
   const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
   };
    
    /* handle submission of form data */
    const handleSubmit = async (e) => {

        e.preventDefault(); /* prevents form from refreshing */

        if(formData.password == null){
            return setErrorMessage('Password must be filled in');
        }
        else if (!formData.a_number || 
            !formData.employee_number || 
            !formData.password) {
            return setErrorMessage('Please fill out all fields');
        }
        // else if(formData.confirmPassword == formData.password){
        //     return setErrorMessage('Passwords do not match. Please try again.');
        // }

        try {
            setLoading(true);
            setErrorMessage(null); // removes previous error message if any during new submission
            const res = await fetch('/api/auth/uniform-signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if(formData.confirmPassword === formData.password){
                return setErrorMessage('Passwords do not match. Please try again.');
            }
            if (data.success === false) {
                return setErrorMessage(data.message);
            }

            setLoading(false);
            
            if (res.ok) {
                navigate('/sign-in');
            }
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    }
  
  return (
    <div className='min-h-screen mt-20 mb-20 flex justify-center'>
        <div className=''>
            <div className='p-3 max-w-3xl mx-auto md:items-center'>
                <div className='flex justify-center items-center'>
                    <Link to='/' className=''>
                        <span><img className='w-60 rounded-md ml-3' src={parces_small_logo} alt="parces solutions logo"/></span>
                        <p className='self-center font-semibold pt-2 text-4xl'>Parces Solutions</p>
                    </Link>
                </div>
                <p className='text-sm mt-5 w-80 mx-auto text-center font-mono'>
                    Enter your information in order to sign into your uniform portal
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
                                type='text'
                                placeholder='Employee Number'
                                id='employee_number'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                     <div className='mt-1'>
                        <div>
                            <Label value='Password' />
                            <TextInput 
                                type='password'
                                // placeholder='•••••••••'
                                id='password'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    
                    <Button type='submit' className='bg-blue-800 text-white mt-8 px-10 py-1.5 mx-auto hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700' disabled={loading}>
                        {
                            loading ? (
                                <>
                                    <Spinner size='sm' />
                                    <span className='pl-3'>Loading...</span>
                                </>
                            ) : 'Create Account'
                        }
                    </Button>
                </form>
                <div className='mt-4 flex gap-1 justify-center'>
                    <p>Dont have an account?</p>
                    <Link to='/sign-up' className='text-blue-600 font-bold'>Sign Up</Link>
                </div>
                {
                    errorMessage && (
                        <Alert className='mt-5 w-80 mx-auto' color='failure'>
                             {errorMessage}
                        </Alert>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default SignUp