import { useEffect, useState } from 'react'
import { Sidebar } from 'flowbite-react';
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IoShirtOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { GrStorage } from "react-icons/gr";

function DashSidebar() {
    const location = useLocation(); //gives access to URL
    const { currentUser } = useSelector(state => state.user);
    const [tab, setTab] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search); //finds the URL that was searched
        const tabFromURL = urlParams.get('tab'); //gets the tab name after the "tab=" in URL
    if (tabFromURL) {
      setTab(tabFromURL);
    }
    }, [location.search]); //last part makes sure to run the useEffect every time a URL is searched

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
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                    <Sidebar.Item 
                        active={tab === 'profile'} 
                        icon={MdOutlineAccountCircle} 
                        labelColor="dark"
                        className='my-2'
                    >
                        Profile
                    </Sidebar.Item>
                </Link>
                {/* {!currentUser.isAdmin && (
                )} */}
                    <Link to='/dashboard?tab=uniforms'>
                        <Sidebar.Item 
                            active={tab === 'uniforms'} 
                            icon={IoShirtOutline} 
                            labelColor="dark"
                            className='my-2'
                        >
                            Uniforms
                        </Sidebar.Item>
                    </Link>
                <Link to='/dashboard?tab=cart'>
                    <Sidebar.Item 
                        active={tab === 'cart'} 
                        icon={IoCartOutline} 
                        labelColor="dark"
                        className='my-2'
                    >
                        Cart
                    </Sidebar.Item>
                </Link>
                {currentUser.isAdmin && (
                    <Link to='/dashboard?tab=inventory'>
                    <Sidebar.Item 
                        active={tab === 'inventory'} 
                        icon={GrStorage} 
                        label={"Admin"} 
                        labelColor="dark"
                        className='my-2'
                    >
                        Inventory
                    </Sidebar.Item>
                </Link>
                )}
                <Sidebar.Item 
                    icon={HiArrowSmRight}
                    labelColor="dark" 
                    className='cursor-pointer'
                    onClick={handleSignOut}
                >
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar