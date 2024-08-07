import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export const Useviewnot = () => {
  let id =localStorage.getItem('id')
  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); // Change this value according to your preference

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://project-backend-2i9b.onrender.com/User/viewnotuser/${id}`);
        // Sort the data by date before setting it to state
        const sortedData = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setdata(sortedData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  // Calculate index of the first and last item to be displayed
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5'>
      <div className='text-center font-serif text-[20px] font-bold'><h2>NOTIFICATIONS</h2></div>

      <div className="relative overflow-x-auto justify-center flex">
        <table className="w-[850PX] text-sm text-center rtl:text-right  dark:text-gray-400 mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              
              <th scope="col" className="px-6 py-3">
                NOTIFICATION
              </th>
              <th scope="col" className="px-6 py-3">
                DATE
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((nott, index) => (
              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {nott.notification}
                </th>
                <td className=""> {(new Date(nott.date)).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</td>
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
