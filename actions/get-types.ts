import React from 'react'

const URL = `${process.env.PUBLIC_API_URL}/types`
const getTypes = async () => {
  const res = await fetch(URL)

  if(!res.ok){
    throw new Error("Something went wrong while fetching the data!")
  }

  return res.json()
}

export default getTypes