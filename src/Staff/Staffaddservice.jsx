import React, { useState } from 'react'
import toast from 'react-hot-toast'

export const Staffaddservice = () => {
  const[data,setdata]=useState('')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
  }
  let handlesubmit=(event)=>{
    event.preventDefault('')
    const requiredFields = ['service','processing time','requirement','fees'];

for (const field of requiredFields) {
    if (!data[field]) {
        return toast.error(`${field} is required`);
    }
}
    setdata(data)
    toast.success('submit successfully')
    console.log(data)
  }
  return (
    <form onSubmit={handlesubmit}>
    <div className=' w-[100%]  bg-[#CCDAF6] sm:h-[660px] pt-5'>
    <div className='font-bold font-serif text-[20px] m-auto text-center'>SERVICES</div>
    <div className="flex flex-wrap justify-center gap-8" >
        <div className=' h-[360px] w-[450px]  '>


          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
              SERVICE:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg' name='service' type='text' id=''></input></div>
          
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PROCESSING TIME:

            </span>
            <input onChange={handlechange} className='text-black  h-9 w-56 bg-white rounded-r-lg ' name='processing time' type='text' id=''></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              REQUIREMENTS:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg' name='requirement' type='text' id=''></input></div>
          
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              FEES:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg' name='fees' type='text' id=''></input></div>
            <div className='text-center'>

    <button type='submit' className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded mt-5 m-auto'>SUBMIT</button>
    </div>
    </div>
    </div>
    </div>
    </form>
  )
}
