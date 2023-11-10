"use client"
import { Car } from '@/types'

import CarCard from '@/components/car-card'

import React from 'react'


interface CarClientProps{
    cars:Car[]
}
const CarClient:React.FC<CarClientProps> = ({
    cars
}) => {
  return (
    <div className=' grid w-full gap-4 sm:gap-6 md:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 p-5 mt-5'>
         {cars.map(car=>(
            <CarCard key={car.id} data={car} />
         ))}
    </div>
  )
}

export default CarClient