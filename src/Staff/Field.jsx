import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export const Field = () => {
  let { id } = useParams();
  const [data, setdata] = useState('');

  const handlechange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();

    const requiredFields = ['fieldEnglish'];

    for (const field of requiredFields) {
      if (!data[field]) {
        return toast.error(`${field} is required`);
      }
    }

    try {
      await axios.post(`https://project-backend-2i9b.onrender.com/Staff/addfield/`, { ...data, servicesid: id });
      toast.success('Submitted successfully');
      // Clear the form fields
      setdata('');
      // Fetch updated data after submission
      fetchData();
    } catch (error) {
      console.error('Error submitting data:', error);
      toast.error('An error occurred while submitting the form');
    }
  };

  // Function to fetch updated data
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://project-backend-2i9b.onrender.com/Staff/applydetail/${id}`);
      setdata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className='w-[100%] h-[690px] bg-[#CCDAF6] flex justify-center p-9'>
      <div className='h-80 w-[500px] bg-white p-5 rounded-xl'>
        <div className='font-bold text-[25px] text-black font-serif text-center'><label>FORM FIELDS</label></div>
        <form onSubmit={handlesubmit}>
          <div className='font-medium text-black mt-3'>FIELD IN ENGLISH:</div>
          <div>
            <input
              onChange={handlechange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              name='fieldEnglish'
              type='text'
              value={data.fieldEnglish ? data.fieldEnglish :  ''}
            />
          </div>
          <div className='font-medium text-black mt-3'>FIELD IN MALAYALAM:</div>
          <div>
            <input
              onChange={handlechange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              name='fieldMalayalam'
              type='text'
              value={data.fieldMalayalam ? data.fieldMalayalam :  ''}
            />
          </div>
          <div>
            <button
              type='submit'
              className="w-full text-white bg-[#0F3053] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-9 mt-5"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
