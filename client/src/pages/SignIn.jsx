import React from 'react'
import { Link } from 'react-router-dom'
import parces_small_logo from '../logo/parces_small_logo.jpg'
import { Label } from 'flowbite-react'

function SignIn() {
  return (
    <div className='min-h-screen mt-20'>
        <div>
            {/* left side */}
            <div className='p-3 max-w-3xl mx-auto'>
                <Link to='/' className='text-4xl'>
                    <span><img className='w-60 rounded-md ml-5' src={parces_small_logo} alt="parces solutions logo"/></span>
                    <h1 className='self-center pl-1 font-semibold dark:text-white'>Parces Solutions</h1>
                </Link>
                <p className='text-sm mt-5'>
                    This is a demo project. You can sign up with your Volvo credentials.
                </p>
            </div>
            {/* right side */}
            <div className=''>
                <form className=''> 
                    <div className="">
                      <Label value='Your A Number' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn