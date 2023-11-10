import { Car } from '@/types'
import Image from 'next/image'
import React from 'react'

interface CarCardProps{
    data:Car
}

const CarCard:React.FC<CarCardProps> = ({
    data
}) => {
  return (
    <div className="w-full mx-auto group sm:max-w-sm rounded-xl p-2 bg-slate-400 space-y-4">
    <a href="">
        <div className=' aspect-square relative rounded-xl'>
            <Image
              fill
              src={data?.images?.[0]?.url}
              alt='image'
              className=' aspect-square rounded-md object-cover group-hover:scale-110'
              />
        </div>
        <div className="mt-3 space-y-1">
            <span className="block  text-gray-300 text-lg font-semibold">{data.make.name}</span>
            <h3 className="text-sm text-gray-800 duration-150 group-hover:text-indigo-600 font-light">
                {data.type.name}
            </h3>
            <p className="text-gray-600 text-lg duration-150 group-hover:text-gray-800 font-semibold">{data.model?.name}</p>
        </div>
    </a>
</div>
  )
}

export default CarCard