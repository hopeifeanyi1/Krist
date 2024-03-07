import React from 'react'
import Image from "next/image"
import data from './S3D'

const Section3 = () => {
  return (
    <div class="px-20 bg-slate-100 py-10">
      <div class ="grid grid-cols-2">
    <div class="col-span-1 text-2xl">
      <h1>What our Customer say's</h1>
    </div>
    <div class="flex justify-end col-span-1 space-x-2">
      <button class="px-2 py-2 text-sm font-medium text-gray-500 transition bg-black border rounded-md hover:bg-gray-500">
        <Image
        class="inline pl-1  "
        src="/arrow-right.png" 
        alt="arrow right"
        width={20}
        height={20}
        />
      </button>
      <button class="px-2 py-2 text-sm font-medium bg-black text-gray-500 transition border rounded-md hover:bg-gray-500">
        <Image
        class="inline pl-1  "
        src="/arrow-right.png" 
        alt="arrow right"
        width={20}
        height={20}
        />
      </button>
    </div>
    </div>

    <div class="grid grid-cols-3  h-40 my-10 ml-14 ">

       {data.map((e)=>{
                return(
                  <div class="col-span-1 bg-white w-3/4 text-xs p-5 ">       
                  <p>{e.text1}</p>
                  <p class="font-bold mt-4">{e.text2}</p>                  
                  </div>
                )})}       
      </div>
  </div>
  )
}

export default Section3