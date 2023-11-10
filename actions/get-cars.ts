import React from 'react'
import qs from "query-string"
import { Car } from '@/types'


const URL = `${process.env.PUBLIC_API_URL}/cars`
interface Query{
  makeId?:string,
  modelId?:string,
  typeId?:string,
  color?:string,
  YOM?:string,
  isFeatured?:boolean
}
const getCars =async (query:Query):Promise<Car[]> => {
  const url = qs.stringifyUrl({
    url:URL,
    query:{
      makeId:query.makeId,
      color:query.color,
      modelId:query.modelId,
      YOM:query.YOM,
      typeId:query.typeId,
      isFeatured:query.isFeatured
    }
  }
  )
  const res = await fetch(url,{next:{revalidate:10}})
  if(!res.ok){
    throw new Error("There was a problemm fetching cars!")
  }
  return res.json()
  
}

export default getCars