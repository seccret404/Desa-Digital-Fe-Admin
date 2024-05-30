import React, { useState } from 'react';
import Sidebar from '../ui/sidebar';
import { ScrollArea } from '../ui/scroll';
import { Toaster } from '../ui/toaster';
import MenuIcon from '../icon/menuIcon';
import { useNavigate } from 'react-router';


export default function SidebarLayout({ children, setIsLoggedIn }: { children: React.ReactNode; setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; }) {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
    window.location.reload();
  };
  
  

  return (
    <>
      <div className="flex w-full min-h-screen flex-row bg-[#F5F5F5]">
        {sidebarVisible && <Sidebar handleLogout={handleLogout} />} {/* Pass the handleLogout function as a prop */}
        <div className="ml-4 mr-4 flex-[6]">
          <button className='bg-[#0D0C21] mt-3 p-2 rounded-[8px]' onClick={toggleSidebar}><MenuIcon color='white' size={24}/></button>
          <ScrollArea className='h-screen pt-4'>
            {children}
          </ScrollArea>
          <Toaster />
        </div>
      </div>
    </>
  );
}
