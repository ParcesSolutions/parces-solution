import { TextInput, Label, Button } from 'flowbite-react';
import React from 'react';
import {useSelector} from 'react-redux';

function DashProfile() {
  const currentUser = useSelector((state) => state.user);
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className='flex flex-col'>
        <h2 className='ml-5 underline font-semibold text-xl'>Account Info</h2>
        <div className='mt-5 flex gap-6 justify-center'>
          <div className='flex gap-2 justify-center'>
          <div className='w-40'>
            <Label value='First Name' />
            <TextInput type='text' id='firstname' placeholder='First Name' defaultValue={currentUser.currentUser.firstname} />
          </div>
          <div className='w-40'>
            <Label value='Last Name' />
            <TextInput type='text' id='lastname' placeholder='Last Name' defaultValue={currentUser.currentUser.lastname} />
          </div>
          </div>
        </div>
        <div className='mt-5 gap-6 mx-auto w-80'>
          <Label value='Email' />
          <TextInput type='text' id='email' placeholder='Email' defaultValue={currentUser.currentUser.email} />
        </div>
        <div className='mt-5 gap-6 mx-auto w-80'>
          <Label value='Password' />
          <TextInput type='text' id='password' placeholder='password' />
        </div>
        <div className='mt-5 gap-6 mx-auto w-80'>
          <Label value='Address' />
          <TextInput type='text' id='address' placeholder='Address' defaultValue={currentUser.currentUser.address} />
        </div>
        <h2 className='ml-5 underline font-semibold text-xl mt-10'>Clothing Sizes</h2>
        <div className='mt-3 flex gap-6 justify-center'>
          <div className='flex gap-2 justify-center'>
            <div className='flex gap-2 w-80'>
              <div>
                <Label value='Shirt size' />
                <TextInput type='text' id='shirt_size' placeholder='S,M,L,XL --> 6XL' defaultValue={currentUser.currentUser.shirt_size} />
              </div>
              <div>
                <Label value='Sweatshirt size' />
                <TextInput type='text' id='sweatshirt_size' placeholder='S,M,L,XL --> 6XL' defaultValue={currentUser.currentUser.sweatshirt_size} />
              </div>
              <div>
                <Label value='Shorts width' /> 
                <TextInput type='text' id='shorts_width' placeholder='28 to 46' defaultValue={currentUser.currentUser.shorts_width} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex gap-2 w-80 mx-auto mt-5'>
              <div>
                <Label value='Pants Width' />
                <TextInput type='text' id='pants_width' placeholder='28 to 46' defaultValue={currentUser.currentUser.pants_width} />
              </div>
              <div>
                <Label value='Pants Length' />
                <TextInput type='text' id='pants_length' placeholder='28 to 42' defaultValue={currentUser.currentUser.pants_length} />
              </div>
              <div>
                <Label value='Gender' /> 
                <TextInput type='text' id='gender' placeholder='M, F, or Neutral' defaultValue={currentUser.currentUser.gender} />
              </div>
            </div>
        </div>
        <Button type='submit' gradientDuoTone='purpleToBlue' className='mt-8 w-60 mx-auto' size='lg' outline>
            Update
        </Button>
      </form>
      <div className='mt-6 mb-20 text-red-500 font-semibold flex justify-between px-12'>
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default DashProfile