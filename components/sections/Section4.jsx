import React from 'react'
import data  from './S4D'
import Image from "next/image";

const Section4 = () => {
  return (
    <div class="px-20 mt-24">
        <center><h1 class="text-2xl ">What our Customer say's</h1></center>
        <div class="grid grid-cols-4 my-10 space-x-10 ">
        {data.map((e)=>{
                return(
                  <div class="col-span-1 ">
                    <Image 
                     class=" "
                     src={e.image} 
                     alt="image"
                     width={220}
                     height={150}
                    />
                    <Image 
                     class=" mt-10"
                     src={e.icon} 
                     alt="icon"
                     width={40}
                     height={30}
                    />
                    <p class="mt-3 text-sm font-bold">{e.header}</p>
                    <p class="mt-1 text-xs">{e.text}</p>                   
                  </div>
                )})}
        </div>
    </div>
  )
}

export default Section4