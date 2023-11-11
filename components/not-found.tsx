"use client"

import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
const NotFound = () => {
    const router = useRouter()
  return (
    <div className='flex justify-center items-center w-full'>
      <div className=' p-7 border border-transparent rounded flex-col justify-center items-center bg-black'>
           <h1 className=' text-3xl text-white font-bold font-serif'>
             OOPS! car you are looking for not found
           </h1>
           <div>
              <Button variant="destructive" size="lg" onClick={()=>router.push('/cars')}>
                Remove filters
              </Button>
           </div>
      </div>
    </div>
  )
}

export default NotFound