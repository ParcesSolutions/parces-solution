import React, { useEffect, useState } from 'react'
import { Sidebar } from 'flowbite-react';
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';

function DashSidebar() {
    const location = useLocation(); //gives access to URL
    const [tab, setTab] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search); //finds the URL that was searched
        const tabFromURL = urlParams.get('tab'); //gets the tab name after the "tab=" in URL
    if (tabFromURL) {
      setTab(tabFromURL);
    }
    }, [location.search]); //last part makes sure to run the useEffect every time a URL is searched
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                    <Sidebar.Item 
                        active={tab === 'profile'} 
                        icon={MdOutlineAccountCircle} 
                        label={"User"} 
                        labelColor="dark"
                    >
                        Profile
                    </Sidebar.Item>
                </Link>
                <Sidebar.Item 
                    icon={HiArrowSmRight} 
                    label={"User"} 
                    labelColor="dark" 
                    className='cursor-pointer'
                >
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar