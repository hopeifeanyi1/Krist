import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import userContext from '../store/userContext';

const Banner = () => {

  const router = useRouter();

  const push = () => {
      router.push("/AllProduct")
  }
  const{dropdown} =  useContext(userContext)


  return (



    <div class={`${ dropdown ? 'bg-gray-400' : 'bg-slate-200'}  text-2xl h-screen px-20 space-y-3 pt-36 mb-10`}>
      <p>Classic Exclusive</p>
      <h2 class ="text-4xl font-bold ">Women's Collection</h2>
      <p>UPTO 40% OFF</p>
      
      <button class="border border-black rounded-md bg-black text-white text-xxs w-24 py-1 " type="button" onClick={push}>Shop Now
      <Image
      class="inline pl-1  "
      src="/arrow-right.png" 
      alt="arrow right"
      width={20}
      height={20}
      />
      </button>
      
    </div>
  )
}

export default Banner