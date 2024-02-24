import React from 'react'
import { Link } from 'react-router-dom'
import parces_small_logo from '../logo/parces_small_logo.jpg'
import { Button, Label, TextInput } from 'flowbite-react'

function SignUp() {
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
                <form className=''> 
                    <div className='mt-5 flex gap-6 justify-center'>
                        <div>
                            <Label value='Your Volvo A Number' />
                            <TextInput 
                                text='text'
                                placeholder='ex A12345'
                                id='aNumber'
                            />
                        </div>
                        <div>
                            <Label value='Your Volvo Employee Number' />
                            <TextInput 
                                text='text'
                                placeholder='Employee Number'
                                id='employeeNumber'
                            />
                        </div>
                    </div>
                    <div className='mt-1 flex gap-8 justify-center'>
                        <div>
                            <Label value='Your First Name' />
                            <TextInput 
                                text='text'
                                placeholder=''
                                id='firstName'
                            />
                        </div>
                        <div>
                            <Label value='Your Last Name' />
                            <TextInput 
                                text='text'
                                id='LastName'
                            />
                        </div>
                    </div>
                     <div className='mt-1'>
                        <div>
                            <Label value='Your Email' />
                            <TextInput 
                                text='email'
                                placeholder='johndoe@gmail.com'
                                id='email'
                            />
                        </div>
                    </div>
                    <div className='mt-1 flex gap-8 justify-center'>
                        <div>
                            <Label value='Password' />
                            <TextInput 
                                text='text'
                                placeholder='•••••••••'
                                id='password'
                            />
                        </div>
                        <div>
                            <Label value='Confirm Password' />
                            <TextInput 
                                text='text'
                                placeholder='•••••••••'
                                id='confirmPassword'
                            />
                        </div>
                    </div>
                    <div className='mt-1'>
                        <div>
                            <Label value='What address will you like your uniforms shipped to?' />
                            <TextInput 
                                text='address'
                                placeholder='Stree, City, State, Zipcode'
                                id='address'
                            />
                        </div>
                    </div>
                    <div className='mt-1 flex gap-2 justify-center'>
                        <div className='flex-1 w-2'>
                            <Label value='Shirt Size' />
                            <TextInput 
                                text='text'
                                placeholder='S,M,L,XL --> 6XL'
                                id='shirtSize'
                            />
                        </div>
                        <div className='flex-1 w-2'>
                            <Label value='Sweatshirt Size' />
                            <TextInput 
                                text='text'
                                placeholder='S,M,L,XL --> 6XL'
                                id='sweatshirtSize'
                            />
                        </div>
                        <div className='flex-1 w-2'>
                            <Label value='Shorts Width' />
                            <TextInput 
                                text='text'
                                placeholder='Size 28 to 46'
                                id='sweatshirtSize'
                            />
                        </div>
                    </div>
                    <div className='mt-1 flex gap-2 justify-center'>
                        <div className='flex-1 w-2'>
                            <Label value='Pants Width' />
                            <TextInput 
                                text='text'
                                placeholder='28 to 46'
                                id='pantsWidth'
                            />
                        </div>
                        <div className='flex-1'>
                            <Label value='Pants Length' />
                            <TextInput 
                                text='text'
                                placeholder='28 to 42'
                                id='pantsLength'
                            />
                        </div>
                        <div className='flex-1'>
                            <Label value='Gender' />
                            <TextInput 
                                text='text'
                                placeholder='M, F, or Neutral'
                                id='gender'
                            />
                        </div>
                    </div>
                    <Button className='bg-blue-800 text-white mt-8 px-10 py-1.5 mx-auto hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700'>
                        Create Account
                    </Button>
                </form>
                <div className='mt-4 flex gap-1 justify-center'>
                    <p className=''>Already have an account?</p><Link to='/sign-in' className='text-blue-600 font-bold'>Sign In</Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp