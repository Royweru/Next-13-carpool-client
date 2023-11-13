import { Car } from '@/types'
import React from 'react'

const URL = `${process.env.PUBLIC_API_URL}/cars`

const getCar = async(id:string)=> {
  const res = await fetch(`${URL}/${id}`,{next:{revalidate:10}})

  if(!res.ok){
    throw new Error("There was a problem while fetching the car")
  }

  return res.json()
}

export default getCar