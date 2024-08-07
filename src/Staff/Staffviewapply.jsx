import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Staffviewapply = () => {
    let id=localStorage.getItem('id')
    const[data,setData]=useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get(`https://project-backend-2i9b.onrender.com/Staff/vapply/${id}`);
                if(data==[]){
                    navigate('/staff/staffviewservice')
                    console.log('asasaasouhjn');
                }
                console.log(response,'====================');
                // Sort the data based on both application date and processing time
                const sortedData = response.data.sort((a, b) => {
                    const dateComparison = new Date(a.application.applicationDate) - new Date(b.application.applicationDate);
                    if (dateComparison !== 0) {
                        return dateComparison; // Sort by application date first
                    }
                    // If application dates are equal, sort by processing time
                    return a.service.processingTime - b.service.processingTime;
                });
                setData(sortedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    
       const offset = currentPage * itemsPerPage;
       const currentItems = data.slice(offset, offset + itemsPerPage);
        const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
    console.log(data,'--------------------');
    let navigate=useNavigate()
   
  return (
    <div className=' w-screen h-[655px] bg-[#CCDAF6]  pt-5 ' >
     <div className='ml-[650px] font-serif text-[20px] font-bold'><h2> APPLICATIONS</h2></div>   

<div class="relative overflow-x-auto justify-center flex">
    {data ?
    <table class="w-[850PX]   rtl:text-right dark:text-gray-400 mt-5">
        <thead class=" text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Apllications
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Application date
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {currentItems.map((application,index)=>(
                <tr key={index} className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{application?.service?.service}</a>
                </th>
               <td>{application?.application?.status}</td>
               <td>{(new Date(application?.application?.applicationDate)).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</td>

               <Link to={`/staff/staffviewapplydetail/${application.application?._id}`}> <td className='px-6 py-4'>View</td></Link> 
            </tr>
                    ))}
        </tbody>
    </table>
:
<div>
    no data
</div>
}

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
