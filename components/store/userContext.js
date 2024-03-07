import { useState, createContext} from "react";

const userContext = createContext({})

export function UserContextProvider(props){
const[dropdown, setDropdown] = useState(false)

    return(
        <userContext.Provider value={{dropdown, setDropdown}}>
            {props.children}
        </userContext.Provider>
    )
}

export default userContext