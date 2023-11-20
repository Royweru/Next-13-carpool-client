import Image from "next/image";
import SearchBar from "@/components/search-bar";
import Desc from "@/components/desc";
import { CTA } from "@/components/cta";
import getMakes from "@/actions/get-makes";
import getModels from "@/actions/get-models";
import getTypes from "@/actions/get-types";
import Carousel from "@/components/carousel";

export default async function Home() {
  const makes = await getMakes();
  const models = await getModels();
  const types = await getTypes();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between space-y-2">
      <div className=" grid grid-cols-1 md:grid-cols-2 p-5 gap-8 mb-5 w-full mt-5 h-2/6">
        <SearchBar types={types} makes={makes} models={models} />
        <Desc />
      </div>
      <section className=" w-full flex flex-col py-14 justify-start items-center">
        <Carousel />
      </section>
      <div className=" w-full bg-black p-5 ">
       <CTA />
      </div>
    </main>
  );
}
