import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

export const Viewcomplaint = () => {
  let id=localStorage.getItem('id')
    const[data,setdata]=useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(5); // Change this value as needed
    useEffect(()=>{
        const fetchData =async()=>{
            try{
                const response=await axios.get(`https://project-backend-2i9b.onrender.com/User/vcom/${id}`)
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
    const currentMeetings = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const handlePageChange = ({ selected }) => setCurrentPage(selected);

  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 '>
    <div className='text-center font-serif text-[20px] font-bold'><h2>COMPLAINT</h2></div>

    <div className="relative overflow-x-auto justify-center flex">
        <table className="w-[80%]  text-center rtl:text-right dark:text-gray-400 mt-5">
            <thead className=" text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
                <tr className='text-center'>
                    <th scope="col" className="px-6 py-3">
                        NAME
                    </th>
                    <th scope="col" className="px-6 py-3">
                        WARD NAME
                    </th>
                    <th scope="col" className="px-6 py-3">
                        COMPLAINT
                    </th>
                    <th scope="col" className="px-6 py-3">
                        DATE
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ACTION
                    </th>
                </tr>
            </thead>
            <tbody>
                {currentMeetings.map((item, index) => (
                    <tr key={index} className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item?.user?.name}</td>
                        <td>{item?.user?.wardName}</td>
                        <td>{item?.complaint?.complaint}</td>
                        <td className="px-6 py-4">  {(new Date(item?.complaint?.date)).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</td>

                        {/* <td>{item?.complaint?.date}</td> */}
                        
                        <td className="px-6 py-4 flex  justify-center">
                            <Link to={`/admin/replycomplaint/${item.complaint?._id}`}><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reply</a></Link>
                           
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    {/* Pagination */}
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
  );
};
