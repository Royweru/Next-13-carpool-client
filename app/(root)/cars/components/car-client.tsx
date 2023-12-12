"use client"
import { Car, Make, Model, Type } from '@/types'

import CarCard from '@/components/car-card'

import React from 'react'
import Banner from '@/components/banner'
import NotFound from '@/components/not-found'


interface CarClientProps{
    cars:Car[]
    types:Type[]
    makes:Make[]
    models:Model[]
}
const CarClient:React.FC<CarClientProps> = ({
    cars,types,makes,models
}) => {
  return (
    <>
  
    <Banner types={types} makes={makes} models={models}/>
    {cars.length===0&& <NotFound />}
    <div className=' grid w-full gap-4 sm:gap-6 md:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 p-5 mt-5 px-2 sm:px-3 md:px-6'>
         {cars.map(car=>(
            <CarCard key={car.id} data={car} />
         ))}
    </div>
    </>
 
  )
}

export default CarClient