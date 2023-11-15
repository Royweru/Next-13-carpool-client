import React from 'react'
import Gallery from '@/components/Gallery'
import getCar from '@/actions/get-car'
import CarInfo from '@/components/car-info'
import { Car } from '@/types'

interface CarIdPageProps{
    params:{
        carId:string
    }
}
const CarIdPage:React.FC<CarIdPageProps> = async({params}) => {
    const car:Car = await getCar(params.carId)
  return (
    <div className=' px-4 sm:px-6 lg:px-8 py-10'>
      <div className=' grid lg:grid-cols-2 items-start gap-x-3'>
         <Gallery images={car.images} />
         <div className=' mt-10 lg:mt-0  p-2 h-full'>
            <CarInfo car={car}/>
         </div>
      </div>
    </div>
  )
}

export default CarIdPage