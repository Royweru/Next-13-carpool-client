"use client"
import React from 'react'

import Select from 'react-select'
interface SelectInputProps{
    value:string|undefined,
    data:Make[]|Type[]|Model[],
    onValueChange:(value:React.SetStateAction<string>)=>void,
    holder:string
}
const SelectInput:React.FC<SelectInputProps> = ({
    value,
    data,
    onValueChange,
    holder
}) => {
  return (
    <div>
        
    </div>
  )
}

export default SelectInput