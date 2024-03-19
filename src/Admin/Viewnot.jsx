import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

export const Viewnot = () => {
  // Sample notification data
  const notifications = [
    { notification: 'Notification 1', date: '30/11/2023', time: '10:11 AM' },
    { notification: 'Notification 2', date: '30/11/2023', time: '10:12 AM' },
    { notification: 'Notification 3', date: '30/11/2023', time: '10:13 AM' },
    { notification: 'Notification 4', date: '30/11/2023', time: '10:14 AM' },
    { notification: 'Notification 5', date: '30/11/2023', time: '10:15 AM' },
    { notification: 'Notification 6', date: '30/11/2023', time: '10:16 AM' },
    { notification: 'Notification 7', date: '30/11/2023', time: '10:17 AM' },
    { notification: 'Notification 8', date: '30/11/2023', time: '10:18 AM' },
    { notification: 'Notification 9', date: '30/11/2023', time: '10:19 AM' },
    { notification: 'Notification 10', date: '30/11/2023', time: '10:20 AM' }
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);

  // Logic to get current items based on current page
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotifications = notifications.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = ({ selected }) => setCurrentPage(selected);

  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 content-center'>
      <div className='text-center font-serif text-[20px] font-bold'><h2>MANAGE NOTIFICATION</h2></div>

      <div className="relative overflow-x-auto justify-center flex">
        <table className="w-[850PX] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">NOTIFICATION</th>
              <th scope="col" className="px-6 py-3">DATE</th>
              <th scope="col" className="px-6 py-3">TIME</th>
              <th scope="col" className="px-6 py-3 text-center col-span-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentNotifications.map((notification, index) => (
              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{notification.notification}</td>
                <td className="px-6 py-4">{notification.date}</td>
                <td className="px-6 py-4">{notification.time}</td>
                <td className="px-6 py-4 flex justify-between">
                  <Link to='/admin/editnot'><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a></Link>
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <ReactPaginate
          pageCount={Math.ceil(notifications.length / itemsPerPage)}
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