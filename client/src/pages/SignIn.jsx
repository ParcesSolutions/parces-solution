'use client'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import parces_small_logo from '../logo/parces_small_logo.jpg';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useSelector, useDispatch } from 'react-redux'; //useSelector allows to access redux global variables
import { signInSuccess, signInStart, signInFailure } from '../redux/user/userSlice';

function SignIn() {

    // const {currentUser} = useSelector(state => state.user); //get user info if singed in

    // if (currentUser){
    //     navigate('/uniforms');
    // }

    /* state to manage form data */
    const [formData, setFormData] = useState({});
    const {loading, error: errorMessage} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /* Keep track of input in field. keep previous inputs for other fields, save inputs for each field Id */
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value.trim()});
    };
    
    /* handle submission of form data */
    const handleSubmit = async (e) => {

        e.preventDefault(); /* prevents form from refreshing */

        if(formData.password == null){
            return dispatch(signInFailure('Password must be filled in'));
        }
        else if (!formData.a_number || 
            !formData.employee_number || 
            !formData.password) {

            return dispatch(signInFailure('Please fill out all fields'));
        }
        // else if(formData.confirmPassword == formData.password){
        //     return setErrorMessage('Passwords do not match. Please try again.');
        // }

        try {
            dispatch(signInStart());
            const res = await fetch('/api/auth/uniform-signin', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success === false) {
                dispatch(signInFailure(data.message));
            }
            if (res.ok) {
                dispatch(signInSuccess(data));
                navigate('/uniforms');
            }
        } catch (error) {
            dispatch(signInFailure(error.message));
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
                            <Label value='Volvo Employee Number' />
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
                            ) : 'Sign In'
                        }
                    </Button>
                </form>
                <div className='mt-4 flex gap-1 justify-center'>
                    <p>Dont have an account?</p>
                    <Link to='/sign-up' className='text-blue-600 font-bold'>Sign Up</Link>
                </div>
                {
                    errorMessage && (
                        <Alert className='mt-5 w-80 mx-auto text-center' color='failure'>
                             {errorMessage}
                        </Alert>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default SignIn