import React from 'react'
import Image from "next/image";
import Link from "next/link"
import { useRef, useState } from 'react'
import { useRouter } from 'next/router';


const ForgotPassword = () => {

    const router = useRouter();

    const handleClick = () => {
        router.push("/Login")
    }

    function submitHandler(e){
        e.preventDefault()
        router.push("/OtpPage")
    }
  return (
    <div class="grid grid-cols-7 ">
        <div class="col-span-4 hidden sm:block">
            <Image
            class="relative col-span-4 " 
            src="/FPImage.png" 
            alt="Forgot Password Image" 
            width={450} 
            height={10}
            />
        </div>
        <div class="pl-8  mt-44 col-span-3 pr-4">
        <form onSubmit={submitHandler}>
            <Image
                class="inline " 
                src="/arrow-left.png" 
                alt="back" 
                width={12} 
                height={12}
                onClick={handleClick}
            />
            <p class="text-xxs inline">Back</p>
            <h2 class="font-bold text-lg mt-4 mb-2">Forgot Password</h2>
            <p class="text-xxs opacity-40 mb-2 w-5/6">Enter your registered email address. We'll send you a code to reset your password.</p>
                <div>
                    <label class="text-xxs" htmlFor="email ">Email Address</label><br/>
                    <input type='email'
                        class="border border-black rounded w-5/6 h-7 focus:outline-none p-1 focus:text-xxs fo "
                        required 
                        id="email"
                        name="email"
                        // ref={emailInputRef} 
                        />
                </div>
                
                <button class="border border-black rounded bg-black text-white text-xs w-5/6 py-2 my-3" type="submit" >Send OTP</button>

            </form>

        </div>
    </div>
  )
}

ForgotPassword.getInitialProps = () => {
    return { layout1: true }
}

export default ForgotPassword