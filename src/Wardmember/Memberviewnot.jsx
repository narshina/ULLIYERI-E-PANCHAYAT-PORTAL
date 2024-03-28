import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'

export const Memberviewnot = () => {
    let id=localStorage.getItem('id')
    const[data,setdata]=useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(5); // Change this value as needed
    useEffect(()=>{
        const fetchData =async()=>{
            try{
                const response=await axios.get(`http://localhost:4000/Member/vnot/${id}`)
                setdata(response.data)
                console.log(response.data)
            }
            catch(error){
                console.error('Error fetching data',error)
            }
        }
        fetchData()
    },[])
    // Logic to get current items based on current page
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNofifications = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const handlePageChange = ({ selected }) => setCurrentPage(selected);
  return (
    <div className=' w-screen h-[655px] bg-[#CCDAF6]  pt-5 ' >
     <div className='ml-[650px] font-serif text-[20px] font-bold'><h2>MANAGE NOTIFICATION</h2></div>   

<div class="relative overflow-x-auto justify-center flex">
    <table class="w-[850PX] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
        <thead class="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    NOTIFICATION
                </th>
                <th scope="col" class="px-6 py-3">
                    DATE
                </th>
                <th scope="col" class="px-6 py-3">
                    TIME
                </th>
                <th scope="col" class="px-6 py-3 text-center col-span-2">
                    ACTION
                </th>
                
            </tr>
        </thead>
        <tbody>
        {currentNofifications.map((item, index) => (
                <tr key={index} className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.notification}
                </th>
                <td class="px-6 py-4">
                {item.date}
                </td>
                <td class="px-6 py-4">
                {item.time}
                </td>
                <td class="px-6 py-4 flex justify-between">
          <Link to='/member/membereditnot'><a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a></Link>
                   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
</div>
<div className="flex justify-center mt-5">
                <ReactPaginate
                    pageCount={Math.ceil(data.length / itemsPerPage)}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageChange}
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </div>

    </div>
  )
}
