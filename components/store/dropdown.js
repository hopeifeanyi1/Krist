import React from 'react'
import { Iconup } from '@/components/store/up'
import { Icondown } from '@/components/store/navv'
import { useRef, useState } from 'react' 


const Dropdown = ({ setHidden }) => {

    const [dropdown, setDropdown] = useState(false)
    function dropn(){
      setDropdown(!dropdown) 
      setHidden(dropdown)
    }
       
  return (
    <div>
        <div>
            <div class={`${dropdown  ? 'hidden' : ''}`} onClick={dropn}> <Icondown/></div>
            <div class={`${dropdown  ? '' : 'hidden'}`} onClick={dropn}> <Iconup /></div>
        </div>        
    </div>
   
  )
}

export default Dropdown