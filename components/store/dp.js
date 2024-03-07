import React from 'react'
import Dropdown from './dropdown';
import { useRef, useState } from 'react' 

const Dp = ({cName, children}) => {

    const [isHidden, setIsHidden] = useState(false);

    const setHidden = () => {
        setIsHidden(!isHidden);
    };
    
     return (
        
        <div >
            <div class="flex ">
                <h3 class="text-sm font-bold">{cName}</h3>
                <Dropdown setHidden={setHidden}/> 
            </div> 
            <div className={`${isHidden ? '' : 'hidden'} `}>
            {children}
            </div>
            {/*  */}
        </div>
  )
}

export default Dp