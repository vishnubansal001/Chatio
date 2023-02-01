import React from 'react'
// import {getAuth,onAuthStateChanged} from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom'
import {BiUserCircle} from 'react-icons/bi';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Navbar() {
  const [pageState,setPageState] = useState("Sign In");
  const navigate = useNavigate();
  const location = useLocation();
  // const auth = getAuth();
  // useEffect(() => {
  //   onAuthStateChanged(auth,(user) => {
  //     user?setPageState("Profile"):setPageState("Sign In");
  //   })
  // },[auth]);
  function pathMatchRoute (route){
    if(route === location.pathname){
      return true;
    }else{
      return false;
    }
  }
  return (
    <div className='bg-[#C219FF] border-b shadow-sm sticky top-0 z-40'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div className='flex justify-center items-center'>
          <p onClick={() => navigate('/')} className='cursor-pointer select-none font-bold text-xl'>ChatIo.com</p>
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li onClick={() => navigate('/')} className={`text-gray-400 select-none cursor-pointer py-3 text-sm font-semibold border-b-[3px] border-b-transparent ${pathMatchRoute('/') && "text-black border-b-red-500 "}`}>Home</li>
            <li onClick={() => navigate('/profile')} className={`text-gray-400 flex justify-center items-center gap-0 select-none cursor-pointer py-3 text-sm font-semibold border-b-[3px] border-b-transparent ${(pathMatchRoute('/profile') || pathMatchRoute('/sign-in')) && "text-black border-b-red-500 "}`}>
              <p>{pageState} &nbsp; </p>
              {
                pageState==='Profile' && <BiUserCircle className='font-semibold text-lg ml-[-3px]' />
              }
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
