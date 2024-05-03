import { Link, useLocation } from 'react-router-dom';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import parces_small_logo from '../logo/parces_small_logo.jpg';
import { useSelector, useDispatch } from 'react-redux';
import {AiOutlineUser} from 'react-icons/ai';
import { signoutSuccess } from '../redux/user/userSlice';

function Header() {
  const path = useLocation().pathname;
  const {currentUser} = useSelector(state => state.user); //get the user info when signed in
  const dispatch = useDispatch();

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
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl flex'>
        <span><img className='h-10 sm:h-14 rounded-md' src={parces_small_logo} alt="parces solutions logo"/></span>
        <h1 className='self-center pl-1 font-semibold dark:text-white'>Parces Solutions</h1>
      </Link>
      <div className='flex gap-2 md:order-2'>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar 
                alt='user'
                img={AiOutlineUser}
                rounded
              />
                
            }
          >
            <Dropdown.Header>
              <span className='block text-sm font-bold'>{currentUser.firstname} {currentUser.lastname}</span>
              <div className="flex">
                <span className='block text-sm'>A Number: </span>
                <span className='block text-sm font-bold'> {currentUser.a_number}</span>
              </div>
              <div className="flex">
              <span className='block text-sm'>Employee Number: </span>
                <span className='block text-sm font-bold'> {currentUser.employee_number}</span>
              </div>
              
            </Dropdown.Header>
            <Link to='/dashboard?tab=profile'>
              <Dropdown.Item>Edit Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Link to='/sign-in'>
              <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
            </Link>
            
          </Dropdown>
        ): 
        (
          <>
            {/* <Link to='/sign-in'>
              <Button className='bg-blue-800 hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 text-white' outline color='hover:bg-blue-900' pill>
                Uniform Portal
              </Button>
            </Link> */}
            <Navbar.Toggle />
          </>
        )}
      </div>
      <div>
        {currentUser ? (
          <></>
        ):
        (
        <Navbar.Collapse className='px-2 self-center'>
          <Navbar.Link active={path === "/"}>
            <Link to='/' className='text-xl'>
              Home
            </Link>
          </Navbar.Link>
          {/* <Navbar.Link active={path === "/projects"}>
            <Link to='/projects' className='text-lg'>
              Projects
            </Link>
          </Navbar.Link> */}
          <Navbar.Link active={path === "/services"}>
            <Link to='/services' className='text-xl'>
              Services
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
        )}
      </div>
    </Navbar>
  )
}

export default Header