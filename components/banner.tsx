import Image from 'next/image'
import React from 'react'
import SearchBar from './search-bar'
import ExtraSearch from './extra-search'
import { Make, Model, Type } from '@/types'


interface BannerProps{
    makes:Make[],
    types:Type[],
    models:Model[]
}

const Banner:React.FC<BannerProps> = ({
    types,makes,models
}) => {
  return (
    <section className="mt-5 w-full pb-5 px-4 items-center lg:flex md:px-8 gap-x-3 ">
                <div className="space-y-4 flex-1 w-full">
                   <SearchBar types={types} makes={makes} models={models}  />
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3 rounded-lg border-transparent h-full">
                   <ExtraSearch makes={makes} bodyTypes={types}/>
                </div>
            </section>
  )
}

export default Banner