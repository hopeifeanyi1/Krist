import React from 'react'
import Image from "next/image";
import Link from "next/link"
import { useRef, useState } from 'react'

const SignUp = () => {

  function submitHandler(e){
    e.preventDefault()
  }

  return (
    <div class="grid grid-cols-7 ">
       <div class="col-span-4 hidden sm:block">
        <Image
          class="relative col-span-2 " 
          src="/SignUpImage.png" 
          alt="Sign Up Image" 
          width={450} 
          height={10}
          />
          <Image
          class="absolute top-20 left-72 " 
          src="/Krist.png" 
          alt="Logo" 
          width={70} 
          height={35}
        />
      </div>
      
      <div class="pl-8  mt-32 col-span-3 pr-4 ">
      <form onSubmit={submitHandler}>
            <h2 class="font-bold text-lg mb-1">Create New Account</h2>
            <p class="text-xxs opacity-60 mb-3">Please enter details</p>
                <div class="mb-1">
                    <label class="text-xxs" htmlFor="firstname">First Name</label><br/>
                    <input type='text'
                        class="border border-black rounded w-5/6"
                        required id="firstname"
                        name="firstname"
                        // ref={emailInputRef} 
                        />
                </div>
                <div class="mb-1">
                    <label class="text-xxs" htmlFor="lastname">Last Name</label><br/>
                    <input type='text'
                        class="border border-black rounded w-5/6"
                        required id="lastname"
                        name="lastname"
                        // ref={emailInputRef} 
                        />
                </div>
                <div class="mb-1">
                    <label class="text-xxs" htmlFor="email ">Email Address</label><br/>
                    <input type='email'
                        class="border border-black rounded w-5/6"
                        required id="email"
                        name="email"
                        // ref={emailInputRef} 
                        />
                </div>
                <div class="mb-1">
                    <label class="text-xxs border-black" htmlFor="password">Password</label><br/>
                    <input type="password"
                        class="border border-black rounded w-5/6"
                        required id="password"
                        name="password"
                        // ref={passwordInputRef} 
                        />
                </div>
                
                <div class="flex text-xxs my-3">
                    <div class="w-1/12"><input type='checkbox' id="remember" />
                    </div>
                    <div class="w-11/12">
                    <label htmlFor="remember">I agree to <span class="font-bold">Terms & Conditions</span></label>
                    </div>
                </div>
                
              
                <button class="border border-black rounded bg-black text-white text-xs w-5/6 py-2 my-3" type="submit">Signup</button>

            </form>
   
      </div> 
    </div>
  )
}

SignUp.getInitialProps = () => {
  return { layout1: true }
}

export default SignUp