import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Presidentnav = () => {
  const[president,setpresident]=useState(true)
  let Toggle=()=>{
    setpresident(!president)
  }
  let Toggletrue=()=>{
    setpresident(true)
  }
  return (
    <>
    <div className='flex navcolor p-2  w-[100%] gap-6 text-white justify-between items-center text-[20px] flex-wrap sm:z-30 sm:fixed'>
        <div>
          <b> ULLIYERI-E-PANCHAYAT PORTAL</b>
        </div>
        <button onClick={Toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    {
      president &&

        <div className='flex nav1 p-5 gap-6 flex-wrap text-white text-[15px]'>
      <Link to='/president'>  <div>HOME</div></Link>
     <Link to='/president/secservice'>   <div>SERVICES</div></Link>
     <Link to='/president/secviewapllcsn'> <div>APLLICATIONS</div></Link>
      <Link to='/president/secviewmeet'> <div>MEETING</div></Link>
      <Link to='/president/secviewnot' ><div>NOTIFICATION</div></Link>
      <Link to='/Login' ><div>LOG OUT</div></Link>
        </div>
}
    </div>
    <div className='sm:pt-20'>

    </div>
    <Outlet/>
    </>
  )
}