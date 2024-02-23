import React from 'react'

export const Addsecr = () => {
  return (
    <div className=' w-screen  bg-[#CCDAF6] sm:h-[650px] pt-5'>
      <div className='font-bold font-serif text-[20px] m-auto text-center'>SECRETARY</div>
      <div className="flex flex-wrap justify-center gap-8" >
        <div className=' h-[360px] w-[450px]  '>


          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
              NAME:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PHOTO:

            </span>
            {/* <input type="file" className='h-9 w-56 bg-white rounded-r-lg'/> */}
            <div className="">
              <p className=' text-slate-500 h-9 w-56 bg-white rounded-r-lg'>upload photo</p>
            </div>
            </div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              AGE:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              GENDER:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              EMAIL ID:

            </span>
            <input type='email' className='h-9 w-56 bg-white rounded-r-lg'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              QUALIFICATION:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>



        </div>
        <div className=' h-[360px] w-[450px]  '>
        <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              HOUSE:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              STREET:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              DISTRICT:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PINCODE:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>

            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PHONE NUMBER:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PASSWORD:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
            
            
            

        </div>
      </div>
      <div className='text-center'>

    <button className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded -mt-10 m-auto'>SUBMIT</button>
      </div>
    </div>
  )
}