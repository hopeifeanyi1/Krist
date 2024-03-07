import React from 'react'
import { useRef, useState } from 'react'

const Otp = () => {

    const [otp, setOtp] = useState(new Array(5).fill(""))

    function handleChange(e, index){
      if(isNaN(e.target.value)) return false

      setOtp([...otp.map((data, dataindex)=>(dataindex === index ? e.target.value:data))])

      if(e.target.value && e.target.nextSibling){
        e.target.nextSibling.focus()
      }
    }


  return (
    <div>
      <div class="space-x-2 mt-4 mb-2">
        {
          otp.map((data, i) =>{
            return <input type="text" 
            class="border border-black rounded w-8 h-8 text-center "
            value={data}
            maxLength={1}
            onChange={(e)=>handleChange(e, i)}
            />
          })
        }

      </div>
    </div>
  )
}

export default Otp