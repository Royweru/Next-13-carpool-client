import getCars from '@/actions/get-cars'
import CarClient from './components/car-client'


import React from 'react'
import getTypes from '@/actions/get-types'
import getMakes from '@/actions/get-makes'
import getModels from '@/actions/get-models'
interface CarPageProps{
  searchParams:{
    makeId?:string,
    modelId?:string,
    typeId?:string,
    color?:string,
    YOM?:string,
  }
}

const CarsPage:React.FC<CarPageProps> =async ({
    searchParams
}) => {

 const cars = await getCars({
    isFeatured:true,
    makeId:searchParams.makeId,
    modelId:searchParams.modelId,
    typeId:searchParams.typeId,
    YOM:searchParams.YOM,
    color:searchParams.color
})
 const types =await getTypes()
 const makes = await getMakes()
 const models = await getModels() 

  return (
    <>
     <div className=' w-full flex flex-col justify-start items-center space-y-2'>
        <CarClient cars={cars} makes={makes} types={types} models={models}/>
     </div>
    </>
  )
}

export default CarsPage