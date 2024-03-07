import React from 'react'
import Image from "next/image";
import Link from "next/link"
import { useRef, useState } from 'react'

const Login = () => {

    function submitHandler(e){
        e.preventDefault()
    
    }

  return (
    <div class="grid grid-cols-7">
        <div class="col-span-4 hidden sm:block">
            <Image
            class="relative col-span-2 " 
            src="/loginImage.png" 
            alt="Login Image" 
            width={450} 
            height={5}
            />
            <Image
            class="absolute top-20 left-72 " 
            src="/Krist.png" 
            alt="Logo" 
            width={70} 
            height={35}
            />
        </div>
        

    <div class="pl-8  mt-40 col-span-3 pr-4 ">
        <form onSubmit={submitHandler}>
            <h2 class="font-bold text-lg">Welcome 👋</h2>
            <p class="text-xxs opacity-60 mb-3">Please login here</p>
                <div>
                    <label class="text-xxs" htmlFor="email ">Email Address</label><br/>
                    <input type='email'
                        class="border border-black rounded w-5/6"
                        required id="email"
                        name="email"
                        // ref={emailInputRef} 
                        />
                </div>
                <div>
                    <label class="text-xxs border-black" htmlFor="password">Password</label><br/>
                    <input type="password"
                        class="border border-black rounded w-5/6"
                        required id="password"
                        name="password"
                        // ref={passwordInputRef} 
                        />
                </div>
                <div class="grid md:grid-cols-4 text-xxs py-2">
                <div class="col-span-2 space-x-1 text-left flex text-xxs ">
                <div class="w-1/12">
                    <input class="  bg-black" type='checkbox' id="remember" />
                </div>
                <div class="w-11/12">
                    <label htmlFor="remember">Remember Me</label>
                </div>
                </div>
                <div class="col-span-2">
                    <Link href='/ForgotPassword' class="ml-5">Forgot Password?</Link>
                </div>
                </div>
                <button class="border border-black rounded-lg bg-black text-white text-xxs w-5/6 py-2 my-3" type="submit">Login</button>

            </form>
    </div>
    </div>
    
  )
}

Login.getInitialProps = () => {
    return { layout1: true }
  }

export default Login