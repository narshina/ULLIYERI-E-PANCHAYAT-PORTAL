import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

export const Viewhistory = () => {
    // Sample history data
    const historyData = [
        { name: 'mmfff gggh rrtt', wardNumber: 4, service: 'AGE PROOF CERTIFICATE', date: '11/11/23' },
        // Add more history items as needed
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // Number of items per page

    // Logic to get current items based on current page
    const offset = currentPage * itemsPerPage;
    const currentItems = historyData.slice(offset, offset + itemsPerPage);

    // Change page
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className='w-screen h-[655px] bg-[#CCDAF6] pt-24 content-center'>
            <div className='text-center font-serif text-[20px] font-bold'><h2>HISTORY</h2></div>

            <form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

            {/* History table */}
            <div className="relative overflow-x-auto justify-center flex">
                <table className="w-[80%] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='text-center'>
                            <th scope="col" className="px-6 py-3">NAME</th>
                            <th scope="col" className="px-6 py-3">WARD NUMBER</th>
                            <th scope="col" className="px-6 py-3">SERVICE</th>
                            <th scope="col" className="px-6 py-3">DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index} className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</td>
                                <td className="px-6 py-4">{item.wardNumber}</td>
                                <td className="px-6 py-4">{item.service}</td>
                                <td className="px-6 py-4">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-5">
                <ReactPaginate
                    pageCount={Math.ceil(historyData.length / itemsPerPage)}
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
