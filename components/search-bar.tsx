"use client";

import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import SelectInput from "./select-input";
import Image from "next/image";

interface SearchBarProps {
  types: Type[];
  makes: Make[];
  models:Model[]
}
const SearchBar: React.FC<SearchBarProps> = ({ types, makes,models }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const[bodyType,sestBodyType] = useState("")
  const [selectModels, setSelectModels] = useState<Model[] | undefined>([]);
  const [model, setModel] = useState("");

  useEffect(() => {
    const currentMake = makes.find((make) => make.id === selectedMake);

    const models: Model[] | undefined = currentMake?.models;
    setSelectModels(models);
  }, [selectedMake, makes]);

  return (
    <div className=" rounded-lg px-4 gap-y-8 space-y-4 py-10 flex justify-center items-center w-full m-5 bg-slate-300 flex-col">
      <div className=" flex flex-row justify-between items-center">
        <div className=" gap-x-2 flex items-center font-bold text-2xl text-black font-sans first-letter:text-gray-400 ">
          Search <Search className="w-6 h-6 text-gray-800" />
        </div>
      </div>
      <div className=" grid grid-cols-2  w-full gap-6 ">
        <select className="select select-ghost w-full max-w-xs p-4 rounded" value={selectedMake} onChange={(e)=>setSelectedMake(e.target.value)}>
          <option disabled selected>
            Select a car make
          </option>
          {makes.map((make) => (
            <option
              value={make.id}
              key={make.id}
              className=" flex p-4 justify-center items-center rounded-md bg-slate-200 font-bold mb-3"
            >
              <div>{make.name}</div>
            </option>
          ))}
        </select>
        
        <select className="select select-ghost w-full max-w-xs p-4 rounded" value={bodyType} onChange={(e)=>sestBodyType(e.target.value)}>
          <option disabled selected>
            Select a Body Type
          </option>
          {types.map((type) => (
            <option
              value={type.id}
              key={type.id}
              className=" flex p-5 justify-center items-center rounded-md bg-slate-200 font-bold mb-3"
            >
              <div className=" w-full flex justify-center items-center">
                <div>{type.name}</div> 
                <div className=" w-5 h-5 relative rounded">
                    <Image
                      fill
                      src={type.image}
                      alt=""
                      className=" object-cover object-center"
                      />
                </div>
                </div>
            </option>
          ))}
        </select>
        <select className="select select-ghost w-full max-w-xs p-4 rounded" value={selectedMake} onChange={(e)=>setSelectedMake(e.target.value)}>
          <option disabled selected>
            Select a car model
          </option>
          {selectModels?.map((model) => (
            <option
              value={model.id}
              key={model.id}
              className=" flex p-4 justify-center items-center rounded-md bg-slate-200 font-bold mb-3"
            >
              <div>{model.name}</div>
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Color"
          className="w-full px-4 py-4 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
        <input
          type="text"
          placeholder="Year of Manufacture"
          className="w-full px-4 py-4 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
    </div>
  );
};

export default SearchBar;
