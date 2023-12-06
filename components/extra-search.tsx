import { Make, Type } from '@/types'
import Image from 'next/image'
import React from 'react'

interface ExtraSearchProps{
    makes:Make[],
    bodyTypes:Type[]
}
const ExtraSearch:React.FC<ExtraSearchProps> =({
    makes,
    bodyTypes
}) => {
  return (
    <div className=' w-full flex flex-col justify-start items-center h-full space-y-2 bg-slate-200 rounded-2xl py-3'>
        <div className=' flex flex-col w-full'>
         <h1 className=' text-sm font-bold font-sans '>
           Search by Car Make
         </h1>
        </div>
       
      <div className=' grid grid-cols-7 gap-1'>
        {makes.map(make=>(
            <div key={make.id} className=' relative w-14 h-14 rounded-lg'>
              <Image
               fill
               src={make.image}
               alt='image'
               className=' rounded-full object-cover object-center'
              />
            </div>
        ))}
     </div>

     <div className=' flex flex-col w-full'>
         <h1 className=' text-sm font-bold font-sans '>
           Search by Body type
         </h1>
     </div>

     <div className=' grid grid-cols-7 gap-4'>
        {bodyTypes.map(type=>(
            <div key={type.id} className=' relative w-20 h-20 rounded-lg'>
              <Image
               fill
               src={type.image}
               alt='image'
               className=' rounded-full object-cover object-center'
               />
            </div>
        ))}
     </div>
    </div>
    
  )
}

export default ExtraSearch