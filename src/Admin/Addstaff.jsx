import React, { useEffect, useRef,useState } from 'react'
import { json } from 'react-router-dom'
import toast from 'react-hot-toast'
import {FaEye,FaEyeSlash} from "react-icons/fa"
import axios from 'axios'

export const Addstaff = () => {
  const fileUpload = useRef('')
  const fileUploadPhoto=useRef(null)

  const handleUploadFile = (type)=>{
    // if(type== 'photo'){
    fileUploadPhoto.current.click()
   
  }
  

  const[data,setdata]=useState('')
  const[showpassword,setshowpassword]=useState('password')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
  }
  const[category,setcategory]=useState([''])
  const[refresh,setrefresh]=useState(false)
  useEffect(()=>{
    let fetchData=async()=>{
      let response=await axios.get('http://localhost:4000/President/vcategory',data)
      console.log(response.data);
      setcategory(response.data)
    }
    fetchData()
  },[refresh])

  let handlefile=(event)=>{
    setdata({...data,[event.target.name]:event.target.files[0]})
    console.log(data)
  }

  let handlesubmit=async(event)=>{
    event.preventDefault()
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('photo', data.photo);
    formData.append('age', data.age);
    formData.append('gender', data.gender);
    formData.append('email', data.email);
    formData.append('category', data.category);
    formData.append('houseName', data.houseName);
    formData.append('street', data.street);
    formData.append('district', data.district);
    formData.append('pincode', data.pincode);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('password', data.password);
    formData.append('usertype', 'staff');
    console.log(formData,'formdata');

    let response=await axios.post('http://localhost:4000/User/register',formData,{
      headers: {
        'Content-Type': 'multipart/form-data' // Set the content type for FormData
      }
    })
   console.log(response)

    const requiredFields = ['name', 'photo', 'age', 'gender', 'email','category','houseName', 'street','pincode', 'phoneNumber', 'password','district'];
    console.log(response)

    for (const field of requiredFields) {
        if (!data[field]) {
            return toast.error(`${field} is required`);
        }
    }
    // let mobileNumberPattern = /^[6-9]\d{9}$/
    // if(!mobileNumberPattern.test(data.phonenumber)){
    //  return toast.error('mobile number not matched')
    // }
    let passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    console.log(passwordPattern.test(data.password));
    if(!passwordPattern.test(data.password)){
      return toast.error('password is not matched')
    }
    setdata(data)
    toast.success('submit successfully')
    console.log(data);

  }

  return (
    <form onSubmit={handlesubmit}>
    <div className=' w-screen sm:h-[660px] bg-[#CCDAF6]  pt-5'>
      <div className='font-bold font-serif text-[20px] m-auto text-center'>STAFF</div>
      <div className="flex flex-wrap justify-center gap-8 " >
        <div className=' h-[360px] w-[450px] '>


          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
              NAME:

            </span>
            <input onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg text-black pl-2' name='name' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex' onClick={handleUploadFile}>
              <span  className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
                PHOTO:

              </span>
              {/* <img src={URL.createObjectURL(data.photo)} className='w-12 h-12 object-cover'  alt="" /> */}
              <input onChange={handlefile} ref={fileUploadPhoto} type="file" className='hidden h-9 w-56 bg-white rounded-r-lg text-black pl-2 ' name='photo' />
              <div className="">
                <p className=' text-slate-500 h-9 w-56 bg-white rounded-r-lg'>upload</p>
              </div>
            </div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              AGE:

            </span>
            <input onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg text-black pl-2' name='age' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              GENDER:

            </span>
            <select onChange={handlechange} className='placeholder:select h-9 w-56 bg-white rounded-r-lg text-black pl-2' name='gender'>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
              <option value='others'>Others</option>
              </select></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              EMAIL ID:

            </span>
            <input onChange={handlechange} type='email' className='text-black h-9 w-56 bg-white rounded-r-lg pl-2' name='email' ></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              CATEGORY:

            </span>
           <select onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg text-black pl-2'  name="category" id="">
            {category.map((item)=>(
              <option value={item.category}>{item.category}</option>
            ))}
           </select>
           
           
           </div>



        </div>
        <div className=' h-[360px] w-[450px]  '>
        <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              HOUSE:

            </span>
            <input onChange={handlechange} className='text-black  h-9 w-56 bg-white rounded-r-lg pl-2' name='houseName' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              STREET:

            </span>
            <input onChange={handlechange}  className='text-black h-9 w-56 bg-white rounded-r-lg pl-2' name='street' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              DISTRICT:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg pl-2' name='district' type='text' ></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PINCODE:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg pl-2'name='pincode'type='text' maxLength={6}></input></div>

            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PHONE NUMBER:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg pl-2' name='phoneNumber' type='text' maxLength={10}></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PASSWORD:

            </span>
            <div className="flex text-black  h-9 w-56 bg-white rounded-r-lg justify-center items-center">
            <input onChange={handlechange} className='outline-none' name='password' type={showpassword}></input>
           { showpassword === 'text' ?  <FaEye onClick={()=> setshowpassword('password') } color='black' className='ms-2'/> :
           
           <FaEyeSlash  onClick={()=> setshowpassword('text') } color='black' className='ms-2'/>
           }
            </div>
            </div>
            

        </div>
 
      </div>
      <div className='text-center'>
        <button type='submit' className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded -mt-10 m-auto'>SUBMIT</button></div>
    </div>
    
</form>
  )
  
}
