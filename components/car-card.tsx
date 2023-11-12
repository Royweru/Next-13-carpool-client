import { Car } from "@/types";
import Image from "next/image";
import React from "react";
import { formatter } from "@/lib/utils";
import Currency from "./ui/Currency";

interface CarCardProps {
  data: Car;
}

const CarCard: React.FC<CarCardProps> = ({ data }) => {
  return (
    <div className="w-full mx-auto group sm:max-w-sm rounded-xl p-2 bg-slate-400 space-y-4">
      <a href={`/cars/${data.id}`}>
        <div className=" aspect-square relative rounded-xl">
          <Image
            fill
            src={data?.images?.[0]?.url}
            alt="image"
            className=" aspect-square rounded-md object-cover group-hover:scale-110"
          />
        </div>
        <div className="mt-3 space-y-1">
          <div className=" flex justify-between w-full items-center ">
            <div className=" font-bold  text-neutral-600 text-2xl font-mono">
              {data?.model.name}
            </div>
            <div className=" font-light text-sm text-gray-500">
              {data.make.name}
            </div>
          </div>
          <h3 className="text-sm text-gray-800 duration-150 group-hover:text-indigo-600 font-light">
            {data.isAvailable ? "Available" : "Not Available"}
          </h3>
          <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800 font-semibold">
            Starting price:
            <Currency value={data.price} /><br />
            kes:{(data.price)*150}
          </p>
        </div>
      </a>
    </div>
  );
};

export default CarCard;
