import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';

function Dashboard() {
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
    <div className='min-h-screen flex flex-col md:flex-row'> {/* makes components side by side in wide screen and in a column in small devices */}
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
        {/* if tab is profile then show profile */}
        {tab ==='profile' && <DashProfile />}
    </div>
  )
}

export default Dashboard
