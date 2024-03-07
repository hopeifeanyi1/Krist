import React from 'react'
import ImageProp from './ImageProp'
import Image from "next/image";
import Link from "next/link"

const Footer = () => {

    function submitHandler(e){
        e.preventDefault()
      }

  return (
    <div class="bg-black text-white  pt-10  px-20 mt-10">
        <div class="grid grid-cols-10  ">
            <div class="col-span-3 text-xs opacity-70 space-y-3 ">
                <div >
                    <Image
                    class="" 
                    src="/FKrist.png" 
                    alt="Logo" 
                    width={70} 
                    height={35}
                    />       
                </div>
                <div class="space-x-1 ">
                    <Image
                    class="inline"
                    src="/calling.png" 
                    alt="calling"
                    width={15}
                    height={15}
                    />
                    <span>(704) 555-0127</span>       
                </div>
                <div class="space-x-1">
                    <Image
                    class="inline"
                    src="/gmail.png" 
                    alt="gmail"
                    width={15}
                    height={15}
                    />
                    <span>krist@example.com</span>
                </div>            
                <div class="space-x-1">
                    <Image
                    class="inline"
                    src="/location.png" 
                    alt="location"
                    width={15}
                    height={15}
                    />
                    <span>3891 Ranchview Dr. Richardson, </span>
                    <p class="pl-3">California 62639</p>
                </div>

            </div>
            <div class="col-span-2 space-y-3 pl-4">
            <div>Information</div>
            <div class="text-xs opacity-60 space-y-3">
            <p>My Account</p>
            <p>Login</p>
            <p>My Cart</p>
            <p>My Wishlist</p>
            <p>Checkout</p>
            </div>
        </div>
        <div class="col-span-2 space-y-3 pl-10 ">
            <p>Service</p>
            <div class="text-xs opacity-60 space-y-3">
                <p>About Us</p>
                <p>Careers</p>
                <p>Delivery Infomation</p>
                <p>Privacy Policy</p>
                <p>Terms & Condition</p>
            </div>
        </div>

        <div class=" col-span-3 space-y-3 pl-16">
            
            <p>Subscribe</p>
            <p class="text-xs opacity-60">Enter your email below to be first to know <br /> about new collections and products launches</p>
            <form onSubmit={submitHandler} >
                <div class="border border-white bg-black rounded  px-2 py-1 w-60">
                    <Image
                    class="inline"
                    src="/gmail.png" 
                    alt="gmail"
                    width={20}
                    height={20}
                    />
                    <input type='email'
                        class="appearance-none focus:outline-none ml-1 bg-black text-sm  "
                        required id="email"
                        name="email"
                        placeholder="Your Email"
                        // ref={emailInputRef} 
                        />
                </div>

            </form>
            
        </div>
        
    </div>
    <hr class="my-4 opacity-30"/>
    <div class="grid md:grid-cols-11 pb-4">
        <div class="col-span-3 flex flex-row space-x-2 text-left">
            <Image
                class=""
                src="/Visa.png" 
                alt="visa"
                width={25}
                height={15}
                />
            <Image
                class=""
                src="/Mastercard.png" 
                alt="Mastercard"
                width={25}
                height={15}
                />
            <Image
                class=""
                src="/GooglePay.png" 
                alt="GooglePay"
                width={25}
                height={15}
                />
            <Image
                class=""
                src="/Amex.png" 
                alt="Amex"
                width={25}
                height={15}
                />
            <Image
                class=""
                src="/PayPal.png" 
                alt="PayPal"
                width={25}
                height={15}
                />
        </div>
        <div class="col-span-5 text-center text-xs opacity-60" >
            <p>2023 Krist All Rights are reserved</p>
        </div>
        <div class="col-span-3 flex flex-row space-x-4 justify-end pr-5">
            <Image
                class=""
                src="/facebook.png" 
                alt="facebook"
                width={20}
                height={20}
                />
            <Image
                class=""
                src="/instagram.png" 
                alt="instagram"
                width={20}
                height={20}
                />
            <Image
                class=""
                src="/twitter.png" 
                alt="twitter"
                width={20}
                height={15}
                />
        </div>
    </div>

    </div>
  )
}

export default Footer