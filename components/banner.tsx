import Image from 'next/image'
import React from 'react'
import SearchBar from './search-bar'
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
    <section className="mt-5 mx-auto max-w-screen-xl pb-5 px-4 items-center lg:flex md:px-8 gap-x-3 w-full">
                <div className="space-y-4 flex-1 w-full">
                   <SearchBar types={types} makes={makes} models={models}  />
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3 rounded-lg">
                    <div className=' relative w-full  h-96 rounded-md'>
                      <Image 
                        src="/images/show.jpg"
                        alt=''
                        fill
                        className=' object-cover object-center'
                        />
                    </div>
                </div>
            </section>
  )
}

export default Banner