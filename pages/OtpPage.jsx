import React from 'react'
import Image from "next/image";
import Link from "next/link"
import { useRef, useState } from 'react'
import { useRouter } from 'next/router';
import handler from './api/hello';
import Otp from '@/components/Otp';


const otpPage = ({blur}) => {

    const router = useRouter();
    const [isBlurry, setIsBlurry] = useState(false)
    const [a, setA] = useState(false)

    const handleClick = () => {
        router.push("/ForgotPassword")
    }
    const push = () => {
        router.push("/Login")
    }

  
    function submitHandler(e){
        e.preventDefault()
        setIsBlurry(true)
        setA(true)
    }

  return (
    <div>
       
        <div class={`relative grid grid-cols-7 ${isBlurry ? 'blur-sm' : ''}  `}>
            <div class=" col-span-4 hidden sm:block ">
                <Image
                class="relative col-span-4 " 
                src="/otpPage.png" 
                alt="Otp Image" 
                width={450} 
                height={10}
                />
            </div>
            <div class="pl-8  mt-44 col-span-3 pr-2">
                <Image
                    class="inline " 
                    src="/arrow-left.png" 
                    alt="back" 
                    width={12} 
                    height={12}
                    onClick={handleClick}
                />
                <p class="text-xxs inline">Back</p>
                <h2 class="font-bold text-lg mt-4 mb-2 ">Enter OTP</h2>
                <p class="text-xxs opacity-40 mb-2 w-5/6 ">We have share a code of your registered email address<br/> robertfox@example.com</p>

                <form onSubmit={submitHandler}>
                    <Otp/> 
                    <button class="border border-black rounded bg-black text-white text-xxs w-5/6 py-2 my-3 focus:shadow-2xl" type="submit"   >Verify</button>      
                </form>
            </div> 
        </div>
        <div class={`absolute ${a ? 'inset-0' : 'hidden'} flex items-center justify-center  `}>
            <div class="pt-8 px-3 pb-3  border bg-white text-center">
                <center>
                <div class ="bg-slate-300 rounded-full h-14 w-14 py-2 px-2 animate-none">
                <div class="bg-slate-900 rounded-full h-10 w-10 py-2 px-2 animate-none">
                <Image
                class="border-4 border-black rounded-full h-6 w-6 bg-black animate-none" 
                src="/tick.png" 
                alt="tick Image" 
                width={20} 
                height={20}
                />
                </div>
                </div>
                </center>
                
                <p class="font-bold mt-2">Password Changed Successfully</p>
                <p class="text-xxs mt-2">Your password has been updated successfully</p>
                <button class="border border-black rounded-md bg-black text-white text-xxs w-64 py-2 my-4" type="submit" onClick={push}>Back to Login</button>
            </div>  
        </div>       
    </div>
        
    )
}

otpPage.getInitialProps = () => {
    return { layout1: true }
}

export default otpPage