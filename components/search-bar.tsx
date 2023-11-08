"use client"

import { Search } from 'lucide-react'
import React from 'react'

interface SearchBarProps{
  
}
const SearchBar = () => {
  return (
    <div className=' rounded-lg px-4 gap-y-8 space-y-4 py-10 flex justify-center items-center w-full m-5 bg-slate-300 flex-col'>
        <div className=' flex flex-row justify-between items-center'>
              <div className=' gap-x-2 flex items-center font-bold text-2xl text-black font-sans first-letter:text-gray-400 '>
                Search <Search className='w-6 h-6 text-gray-800' />
              </div>
        </div>
        <div className=' grid grid-cols-2  w-full gap-6 '>
          <input
                type="text"
                placeholder="Model"
                className="w-full px-4 p-3 py-4 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />

               <input
                type="text"
                placeholder="Body Type"
                className="w-full px-4 py-4 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
               <input
                type="text"
                placeholder="Color"
                className="w-full px-4 py-4 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
               <input
                type="text"
                placeholder="Year of Manufacture"
                className="w-full px-4 py-4 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
        </div>
    </div>
  )
}

export default SearchBar