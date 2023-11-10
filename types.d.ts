import { StringToBoolean } from "class-variance-authority/types"

interface Make{
    id:string,
    name:string,
    image:string,
    models:Model[]
}

interface Type{
    id:string,
    name:string,
    image:string
}
interface Model{
    id:string,
    name:string,
    makeId:string
}

interface Car{
    id:string
    make:Make,
    model:Model,
    type:Type,
    color: string,
    regNo :string,
    rentalPrice:number,
    price:number,
    HP:number,
    availability:string,
    location:string,
    fuelType:string,
    engineSize:string,
    acceleration:number,
    year:string,
    mileage:number,
    transmision:string,
    isAvailable:boolean,
    isFeatured:boolean,
    images:ImageType[]
}

interface ImageType{
   id:string
   url:string
}