"use client"

import { Search } from 'lucide-react'
import React,{useEffect, useState} from 'react'

interface SearchBarProps{
  types:Type[]
  makes:Make[]
}
const SearchBar:React.FC<SearchBarProps> = ({
  types,
  makes
}) => {
  const[selectedMake,setSelectedMake] = useState("")
  const[selectModels,setSelectModels] = useState<Model[]|undefined>([])
  const [model,setModel] = useState("")

  useEffect(()=>{
    const currentMake =  makes.find(make=>make.id ===selectedMake)
  
    const models:Model[]|undefined = currentMake?.models
    setSelectModels(models)
  },[selectedMake])
  return (
    <div className=' rounded-lg px-4 gap-y-8 space-y-4 py-10 flex justify-center items-center w-full m-5 bg-slate-300 flex-col'>
        <div className=' flex flex-row justify-between items-center'>
              <div className=' gap-x-2 flex items-center font-bold text-2xl text-black font-sans first-letter:text-gray-400 '>
                Search <Search className='w-6 h-6 text-gray-800' />
              </div>
        </div>
        <div className=' grid grid-cols-2  w-full gap-6 '>
         
            <select placeholder='Choose a car make' value={selectedMake} onChange={(e)=>setSelectedMake(e.target.value)} className=' w-full px-4 py-3 text-black bg-transparent outline-blue-300 shadow-sm rounded-lg'> 
                 {makes.map(make=>(
                  <option key={make.id} value={make.id} className=' p-4 rounded-md mb-2 bg-slate-300'>
                     {make.name}
                  </option>
                 ))}
            </select>
            <select value={model} onChange={(e)=>setModel(e.target.value)} className=' w-full px-4 py-3 text-black bg-transparent outline-none shadow-sm rounded-lg'> 
                 {selectModels?.map(model=>(
                  <option key={model.id} value={model.id}>
                     {model.name}
                  </option>
                 ))}
            </select>
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