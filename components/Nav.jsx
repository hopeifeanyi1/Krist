import React, { useContext } from 'react';
import Image from "next/image";
import Link from "next/link"
import { Icondown } from './store/navv';
import { useRouter } from 'next/router';
import Shop from '@/components/Shop';
import { useRef, useState } from 'react'
import userContext from './store/userContext';
import { Iconlove } from './store/love';
import { Iconsearch } from './store/search';
import { Iconcart } from './store/cart';

const Nav = () => {

  const{dropdown} = useContext(userContext)
  const{setDropdown} =  useContext(userContext)
  const router = useRouter();

  function dd(){
    setDropdown(!dropdown) 
  }

  return (
    <div>
      <div class="grid grid-cols-3 mx-10 py-5">
        <div class="col-span-1 text-left">
            <Image
            class="" 
            src="/Krist.png" 
            alt="Logo" 
            width={90} 
            height={45}
            />
        </div>
        <div class="flex justify-center col-span-1 text-sm pt-1">
            
            <div class="">
              <Link href="/" class="pr-4">Home</Link>   
            </div>
             
            <button onClick={dd} class="h-5 flex" > <p class="inline">Shop </p> <Icondown/></button>
            <div>         
              <Link href="/" class="px-4">Our Story</Link>
              <Link href="/" class="pr-4">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
        </div>
        <div class="col-span-1 text-right flex justify-end space-x-4">
          <div class="opacity-70"><button><Iconsearch/></button></div>
          <div class="opacity-70"><button> <Iconlove/></button></div>
          <div class="opacity-70"><button><Iconcart/></button></div>
          
          <Link href="/Login"><button class="bg-black text-white px-6 py-1 rounded">Login</button></Link> 
        </div>
      </div>
      <div >
      <div class={`${dropdown  ? 'absolute top-14 left-40 w-3/4 inset-0 ' : 'hidden'}`} >
        <Shop/>
      </div>
      </div>
    </div>
  )
}

export default Nav
