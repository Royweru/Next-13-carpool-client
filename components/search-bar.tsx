"use client";

import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Image from "next/image";
import { Type, Make, Model } from "@/types";
import qs from "query-string";
import { Button } from "./ui/button";

interface SearchBarProps {
  types: Type[];
  makes: Make[];
  models: Model[];
}
const SearchBar: React.FC<SearchBarProps> = ({ types, makes, models }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedMake, setSelectedMake] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [selectModels, setSelectModels] = useState<Model[] | undefined>([]);
  const [model, setModel] = useState("");
  const [yom, setYom] = useState("");
  const [color, setColor] = useState("");
  useEffect(() => {
    const currentMake = makes.find((make) => make.id === selectedMake);

    const models: Model[] | undefined = currentMake?.models;
    setSelectModels(models);
  }, [selectedMake, makes]);

  const onSearch = () => {
    try {
      const URL =
        pathname === "/"
          ? `${window.location.href}/cars`
          : window.location.href;
      let currentQuery = {};
      if (searchParams) {
        currentQuery = qs.parse(searchParams.toString());
      }
      const updatedQuery: any = {
        ...currentQuery,
        YOM: yom,
        makeId: selectedMake,
        modelId: model,
        typeId: bodyType,
      };
      const pushUrl = qs.stringifyUrl(
        {
          url: URL,
          query: updatedQuery,
        },
        { skipNull: true, skipEmptyString: true }
      );
      setSelectedMake("")
      setModel("")
      setColor("")
      setYom("")
      setBodyType("")
      router.push(pushUrl);
    } catch (error) {
      throw new Error("Error occured on stringifying the url");
    }
  };
  return (
    <div className=" bg-slate-800 rounded-lg px-4 gap-y-8 space-y-4 py-10 flex justify-center items-center w-full m-5 flex-col">
      <div className=" flex flex-row justify-between items-center">
        <div className=" gap-x-2 flex items-center font-bold text-2xl text-white font-sans first-letter:text-gray-400 ">
          Search a car
        </div>
      </div>
      <div className=" grid grid-cols-2  w-full gap-6 ">
        <select
          className="select select-ghost w-full max-w-xs p-4 rounded"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
        >
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

        <select
          className="select select-ghost w-full max-w-xs p-4 rounded"
          value={bodyType}
          onChange={(e) => setBodyType(e.target.value)}
        >
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
        <select
          className="select select-ghost w-full max-w-xs p-4 rounded"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
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
        {/* <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Color"
          className="input input-bordered w-full max-w-xs p-5 rounded"
        /> */}
        <input
          type="text"
          value={yom}
          onChange={(e) => setYom(e.target.value)}
          placeholder="Year of Manufancture"
          className="input input-bordered w-full max-w-xs p-5 rounded"
        />
        <div className=" w-full flex items-center justify-end">
          <Button variant="ghost" className=" flex justify-center gap-x-4 items-center text-white" size="lg" onClick={onSearch}>
            <Search size={30}/>
             SEARCH
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
