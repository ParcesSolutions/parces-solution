import { TextInput, Label, Button, Select, Alert, Modal } from 'flowbite-react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  updateStart, 
  updateSuccess, 
  updateFailure, 
  deleteUserStart, 
  deleteUserSuccess, 
  deleteUserFailure,
  signoutSuccess, 
} from '../redux/user/userSlice';
import { HiOutlineExclamationCircle } from 'react-icons/hi'

function DashProfile() {

  // Access global user data from signed in user
  const { currentUser, error, loading } = useSelector(state => state.user);

  //Create form data to send to DB for updating
  const [formData, setFormData] = useState({});

  // Inform user update was successful
  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);

  // Inform user error with update
  const [updateError, setUpdateError] = useState(null);

  // Handle modal pop up when deleting user
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  // Add changed data to formData
  // example of how to add changed data from a specific id:
  // setFormData({...formData, shirt_size: e.target.value})
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  // Function to handle submitting formData to Update User API
  const handleSubmit = async (e) => {
    
    // Prevent form from refreshing on UI
    e.preventDefault();

    // Remove any recent success or error alerts when re-submitting
    setUpdateError(null);
    setUpdateUserSuccess(null);

    // Verify that formData is not empty in order to trigger update
    if (Object.keys(formData).length === 0) {
      setUpdateError("No changes made to update");
      return;
    }
    
    try {

      // Distpatch start from Redux
      dispatch(updateStart());

      console.log();

      // Send formData to dynamic URL based on user ID
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });

      // Make response from API into JSON
      const data = await res.json();

      // Handle JSON response from API
      if (!res.ok) {
        dispatch(updateFailure(data.message));
        setUpdateError(data.message);
        return

      } else {
        dispatch(updateSuccess(data));
        setUpdateUserSuccess("Your profile has been updated successfully");
      }

    } catch (error) {
      dispatch(updateFailure(error.message));
      setUpdateError(error.message);
    }
  };

  const handleDeleteUser = async () => {
    setShowModal(false);
    try {

      //Start the deleting of user
      dispatch(deleteUserStart());

      //Make delete API call and get response
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });

      //convert response data to json
      const data = await res.json();

      //handle response
      if(!res.ok) {
        dispatch(deleteUserFailure(data.message));
      } else {
        dispatch(deleteUserSuccess(data))
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if(!res.ok) {
        console.log(data.error);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <h2 className='ml-5 underline font-semibold text-xl'>Account Info</h2>
        <div className='mt-5 flex gap-6 justify-center'>
          <div className='flex mx-auto gap-2 justify-center'>
          <div className='w-40'>
            <Label value='First Name' />
            <TextInput 
              type='text' 
              id='firstname' 
              placeholder='First Name' 
              defaultValue={currentUser.firstname} 
              onChange={handleChange}/>
          </div>
          <div className='w-40'>
            <Label value='Last Name' />
            <TextInput 
              type='text' 
              id='lastname' 
              placeholder='Last Name' 
              defaultValue={currentUser.lastname}
              onChange={handleChange} />
          </div>
          </div>
        </div>
        <div className='mt-5 gap-6 mx-auto w-80'>
          <Label value='Email' />
          <TextInput 
            type='text' 
            id='email' 
            placeholder='Email' 
            defaultValue={currentUser.email}
            onChange={handleChange} />
        </div>
        <div className='mt-5 gap-6 mx-auto w-80'>
          <Label value='New Password' />
          <TextInput 
            type='text' 
            id='password' 
            placeholder='password'
            onChange={handleChange} />
        </div>
        <div className='mt-5 gap-6 mx-auto w-80'>
          <Label value='Confirm Password' />
          <TextInput 
            type='text' 
            id='confirmPassword' 
            placeholder='confirm password' />
        </div>
        <div className='mt-5 gap-6 mx-auto w-80'>
          <Label value='Address' />
          <TextInput 
            type='text'  
            id='address' 
            placeholder='Address' 
            defaultValue={currentUser.address}
            onChange={handleChange} />
        </div>
        <h2 className='ml-5 underline font-semibold text-xl mt-10'>Clothing Sizes</h2>
        <div className='mt-3 flex gap-6 justify-center'>
          <div className='flex gap-2 justify-center'>
            <div className='flex gap-2 justy-center'>
              <div>
                <Label value='Shirt size' />
                {/* <TextInput type='text' id='shirt_size' placeholder='S,M,L,XL --> 6XL' defaultValue={currentUser.currentUser.shirt_size} /> */}
                <Select 
                    id='shirt_size' 
                    required type="text" 
                    defaultValue={currentUser.shirt_size}
                    onChange={handleChange}>
                        <option value={currentUser.shirt_size}>Saved Size: {currentUser.shirt_size}</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
                        <option>3XL</option>
                        <option>4XL</option>
                        <option>5XL</option>
                        <option>6XL</option>
                </Select>
              </div>
              <div>
                <Label value='Sweatshirt size' />
                {/* <TextInput type='text' id='sweatshirt_size' placeholder='S,M,L,XL --> 6XL' defaultValue={currentUser.currentUser.sweatshirt_size} /> */}
                <Select 
                    id='sweatshirt_size' 
                    required type="text" 
                    defaultValue={currentUser.sweatshirt_size}
                    onChange={handleChange}>
                        <option value={currentUser.sweatshirt_size}>Saved Size: {currentUser.sweatshirt_size}</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
                        <option>3XL</option>
                        <option>4XL</option>
                        <option>5XL</option>
                        <option>6XL</option>
                </Select>
              </div>
              <div>
                <Label value='Shorts width' /> 
                {/* <TextInput type='text' id='shorts_width' placeholder='28 to 46' defaultValue={currentUser.currentUser.shorts_width} /> */}
                <Select 
                    id='shorts_width' 
                    required type="text"
                    defaultValue={currentUser.shorts_width}
                    onChange={handleChange}>
                        <option value={currentUser.shorts_width}>Saved size: {currentUser.shorts_width} </option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                        <option>32</option>
                        <option>33</option>
                        <option>34</option>
                        <option>35</option>
                        <option>36</option>
                        <option>37</option>
                        <option>38</option>
                        <option>39</option>
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                        <option>43</option>
                        <option>44</option>
                        <option>45</option>
                        <option>46</option>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex gap-3 justify-center mx-auto mt-5'>
              <div>
                <Label value='Pants Width' />
                {/* <TextInput type='text' id='pants_width' placeholder='28 to 46' defaultValue={currentUser.currentUser.pants_width} /> */}
                <Select 
                    id='pants_width' 
                    required type="text"
                    defaultValue={currentUser.pants_width}
                    onChange={handleChange}>
                        <option value={currentUser.pants_width}>Saved size: {currentUser.pants_width} </option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                        <option>32</option>
                        <option>33</option>
                        <option>34</option>
                        <option>35</option>
                        <option>36</option>
                        <option>37</option>
                        <option>38</option>
                        <option>39</option>
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                        <option>43</option>
                        <option>44</option>
                        <option>45</option>
                        <option>46</option>
                </Select>
              </div>
              <div>
                <Label value='Pants Length' />
                {/* <TextInput type='text' id='pants_length' placeholder='28 to 42' defaultValue={currentUser.currentUser.pants_length} /> */}
                <Select 
                    id='pants_length' 
                    required type="text"
                    defaultValue={currentUser.pants_length}
                    onChange={handleChange}>
                        <option value={currentUser.pants_length}>Saved size: {currentUser.pants_length} </option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                        <option>32</option>
                        <option>33</option>
                        <option>34</option>
                        <option>35</option>
                        <option>36</option>
                        <option>37</option>
                        <option>38</option>
                        <option>39</option>
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                </Select>
              </div>
              <div>
                <Label value='Gender' /> 
                {/* <TextInput type='text' id='gender' placeholder='M, F, or Neutral' defaultValue={currentUser.currentUser.gender} /> */}
                <Select 
                    id='gender' 
                    required type="text"
                    defaultValue={currentUser.gender}
                    onChange={handleChange} >
                        <option value={currentUser.gender}>Saved size: {currentUser.gender}</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Neutral</option>
                </Select>
              </div>
            </div>
        </div>
        <Button disabled={loading} type='submit' gradientDuoTone='purpleToBlue' className='mt-8 w-60 mx-auto' size='lg' outline>
            {loading ? 'Loading...' : 'Update'}
        </Button>
      </form>
      <div className='mt-6 mb-20 text-red-500 font-semibold flex mx-auto justify-center'>
        {/* {
          currentUser.isAdmin && (
            <span onClick={() => setShowModal(true)} className='cursor-pointer'>Delete Account</span>
          )
        } */}
        <span className='cursor-pointer' onClick={handleSignOut}>Sign Out</span>
      </div>
      {updateUserSuccess && (
        <Alert 
          color='success' 
          className='mb-12 justify-center'>
          {updateUserSuccess}
        </Alert>
      )}
      {updateError && (
        <Alert 
        color='failure' 
        className='mb-12 justify-center'>
          {updateError}
        </Alert>
      )}
      {error && (
        <Alert 
        color='failure' 
        className='mb-12 justify-center'>
          {error}
        </Alert>
      )}
      <Modal 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        popup 
        size='md'>
          <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 mb-4 mx-auto' />
                <h3 className='mb-5 text-lg text-gray-500'>Are you sure you want to delete this account?</h3>
                <div className="flex justify-center gap-10">
                  <Button color='failure' onClick={handleDeleteUser}>
                    Yes, I am sure
                  </Button>
                  <Button color='gray' onClick={() => setShowModal(false)}>
                    No, cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
      </Modal>
    </div>
  )
}

export default DashProfile