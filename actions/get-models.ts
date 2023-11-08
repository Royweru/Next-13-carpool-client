import React from 'react'

const URL = `${process.env.PUBLIC_API_URL}/models`
const getModels = async () => {
  const res = await fetch(URL,{next:{revalidate:10}})

  if(!res.ok){
    throw new Error("Something went wrong while fetching the data!")
  }

  return res.json()
}

export default getModels