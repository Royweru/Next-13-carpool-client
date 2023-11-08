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