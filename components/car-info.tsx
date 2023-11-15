import { Car } from '@/types'
import React from 'react'

interface CarInfoProps{
    car:Car
}
const CarInfo:React.FC<CarInfoProps> = ({
    car
}) => {
  return (
    <div className=' flex flex-col space-y-3 w-full h-full bg-slate-200 rounded justify-start items-center'>
        <div className=' flex flex-row justify-between w-full items-center mt-5'>
            <div className=' text-2xl font-bold text-gray-900'>
            {car.model.name.toUpperCase()}
            </div>
            <div className=' text-sm  text-gray-800 font-semibold '>
               {car.make.name}
            </div>
        </div>
        <div className=' grid grid-cols-2 gap-8 w-full ml-2'>
           <h1 className=' font-bold text-2xl font-serif text-rose-400'>
            Mileage: {car.mileage}Km
           </h1>
           <h1 className=' font-bold text-2xl font-serif text-neutral-500'>
            Color: {car.color}
           </h1>
           <h2 className=' font-serif txt-sm font-semibold text-neutral-500'>
             Accleration(0-100Km/hr):{car.acceleration}sec
           </h2>
           <h2 className=' font-serif txt-sm font-semibold text bg-neutral-500'>
             Engine size:{parseInt(String(car.engineSize))}cc
           </h2>
           <h2 className=' font-serif txt-sm font-semibold text text-neutral-500'>
             Horse Power:{car.HP} HP
           </h2>
           <h2 className=' font-serif txt-sm font-semibold text text-neutral-500'>
             Fuel Type:{car.fuelType}
           </h2>
           <h2 className=' font-serif txt-sm font-semibold text text-neutral-500'>
             Transimission:{car.transmision}
           </h2>
        </div>
      
      <div className=' flex flex-col items-center justify-between mt-12 gap-y-8'>
           <h1 className=' font-bold text-xl text-neutral-800 font-sans'>
            Location:{car.location}
           </h1>
           <h1 className=' font-bold text-xl text-neutral-800 font-sans'>
            Starting Price:{(car.price)*150}
           </h1>
           <h1 className=' font-bold text-xl text-neutral-800 font-sans'>
            Daily rental Price:{(car.rentalPrice)*150}
           </h1>
           <h1 className=' font-bold text-xl text-neutral-800 font-sans'>
            Year of Manufacture:{car.year}
           </h1>
      </div>
    </div>
  )
}

export default CarInfo