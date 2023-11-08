import React from 'react'

const URL = process.env.PURBLIC_API_URL
const getTypes = async () => {
  const res = await fetch(`${URL}/types`)

  if(!res.ok){
    throw new Error("Something went wrong while fetching the data!")
  }

  return res.json()
}

export default getTypes