import React from 'react'
import data from './checkboxPC'
import { useRef, useState } from 'react' 


const Checkbox = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const handleCheckboxChange = (e) => {
        setSelectedOption(e);
    };

  return (
    <div>
        <div class="text-xxs py-2">
        {data.map((index, e)=>{
            return(
            <div class="col-span-2 space-x-1 text-left flex text-xxs " key={index}>
            <div class="w-1/12">
                <input class="  bg-black" type='checkbox' id="remember" />
            </div>
            <div class="w-11/12">
                <label htmlFor="remember">{e.category}</label>
            </div>
            </div>
        )})}  
        </div>
  </div>
  )
}

export default Checkbox