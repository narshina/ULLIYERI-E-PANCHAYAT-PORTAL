import React from 'react'
import { Link } from 'react-router-dom'

export const Viewcomplaint = () => {
  return (
    <div className=' w-screen h-[655px] bg-[#CCDAF6]  pt-5 content-center' >
            <div className=' text-center font-serif text-[20px] font-bold'><h2>COMPLAINT</h2></div>

            <div class="relative overflow-x-auto justify-center flex">
                <table class="w-[80%] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                    <thead class="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='text-center'>
                            <th scope="col" class="px-6 py-3">
                                NAME
                            </th>
                            <th scope="col" class="px-6 py-3">
                                COMPLAINT
                            </th>
                            <th scope="col" class="px-6 py-3">
                                DATE
                            </th>
                            <th scope="col" class="px-6 py-3">
                                TIME
                            </th>
                            <th scope="col" class="px-6 py-3  ">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                dfghhh 
                            </th>
                            <td class="">
                                fgdhdhjjjdjd
                            </td>
                            <td class="">
                                12/11/23
                            </td>
                            <td class="">
                                12:11 pm 
                            </td>
                            <td class="">
                  <Link to='/admin/replycomplaint'><a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reply</a> </Link> 
            
                            </td>
                        </tr>
                        {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4 flex justify-between">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr> */}
                        {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4 flex justify-between">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr> */}
                        {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4 flex justify-between">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr> */}

                    </tbody>
                </table>
            </div>


        </div>
  )
}
