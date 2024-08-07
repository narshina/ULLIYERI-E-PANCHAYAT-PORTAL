import React ,{useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate';
import axios from 'axios';

export const Userviewreply = () => {
  let id=localStorage.getItem('id')
  const[data,setdata]=useState([])

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://project-backend-2i9b.onrender.com/User/viewreply/${id}`);
        setdata(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


  
  return (
    <div className=' w-screen h-[665px] bg-[#CCDAF6]  pt-5' >
     <div className='text-center font-serif text-[20px] font-bold'><h2>REPLY TO COMPLAINT</h2></div>   

<div class="relative overflow-x-auto justify-center flex">
    <table class="w-[850PX] text-sm text-left rtl:text-right  dark:text-gray-400 mt-5">
        <thead class="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
            <tr className='text-center h-10'>
                <th scope="col" class="p-4 py-3">
                    COMPLAINT
                </th> 
                <th scope="col" class="px-6 py-3">
                    REPLY
                </th>
            </tr>
        </thead>
        <tbody>
        
            {currentItems.map((complaints, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} text-center ${index % 2 === 0 ? 'dark:bg-gray-900' : 'dark:bg-gray-800'} border-b dark:border-gray-700`}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {complaints.complaint}
              </th>
              <td className="h-5">{complaints.reply}</td>
              
              
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
