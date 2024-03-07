import React from 'react'
import Image from "next/image";
import S2C from './S2C';
import data from './S2D';


const Section2 = () => {
  return (
    <div class="px-20">
      
      <div class ="grid grid-cols-2">
        <div class="col-span-1 text-2xl">
          <h1>Shop by Categories</h1>
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

      <div class="grid grid-cols-4  h-60 my-10 space-x-5 ">
        <center class="col-span-1 bg-slate-200 ">
          <button class="bg-white rounded w-5/6  mt-40  ">Casual Wear</button>
        </center>
        <center class="col-span-1 bg-slate-200 ">
          <button class="bg-white rounded w-5/6 mt-40  ">Western Wear</button>
        </center>
        <center class="col-span-1 bg-slate-200">
          <button class="bg-white rounded w-5/6 mt-40  ">Ethnic Wear</button>
        </center>
        <center class="col-span-1 bg-slate-200">
          <button class="bg-white rounded w-5/6 mt-40">Kids Wear</button>
        </center>
      </div>

      <div >
        <center class="text-3xl font-semi-bold">Our Bestseller</center>

        <div class="grid grid-cols-4 my-10 gap-x-6 gap-y-4 ">
          {data.map((e)=>{
                return(
                  <div class="space-y-1">
                    <S2C/>
                    <p class="font-bold pt-2">{e.text1}</p>
                    <p class="text-sm">{e.text2}</p>
                    <p class="inline-block text-sm">{e.text3}</p><span class="opacity-30 line-through pl-1">$40.00</span>
                  </div>  
                )})}  
        </div>
      </div>

    </div>
  )
}

export default Section2