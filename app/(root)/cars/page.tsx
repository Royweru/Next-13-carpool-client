import getCars from '@/actions/get-cars'
import CarClient from './components/car-client'


import React from 'react'
interface CarPageProps{
  searchParams:{
    makeId:string,
    modelId:string,
    typeId:string,
    color:string,
    YOM:string,
  }
}

const CarsPage:React.FC<CarPageProps> =async ({
    searchParams
}) => {

 const cars = await getCars({isFeatured:true})

  return (
    <>
     <div className=' w-full flex flex-col justify-start items-center'>
        <CarClient cars={cars} />
     </div>
    </>
  )
}

export default CarsPage