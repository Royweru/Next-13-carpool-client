import React from 'react'

const SearchBar = () => {
  return (
    <div className=' rounded-lg px-4 py-12 flex justify-center items-center w-full m-5 bg-slate-300'>
        <div className=' grid grid-cols-2 h-full w-full gap-4'>
          <input
                type="text"
                placeholder="Model"
                className="w-full  p-3 py-2 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
                <input
                type="text"
                placeholder="Make"
                className="w-full pl-12 pr-3 py-2 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
               <input
                type="text"
                placeholder="Body Type"
                className="w-full pl-12 pr-3 py-2 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
               <input
                type="text"
                placeholder="Color"
                className="w-full pl-12 pr-3 py-2 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
               <input
                type="text"
                placeholder="Year of Manufacture"
                className="w-full pl-12 pr-3 py-2 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
        </div>
    </div>
  )
}

export default SearchBar