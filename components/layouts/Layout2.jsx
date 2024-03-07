import React, { useContext } from 'react';
import Footer from "../Footer"
import Nav from "../Nav"
import userContext from '../store/userContext';

const { Fragment } = require("react");

function Layout2(props){

    const{dropdown} =  useContext(userContext)

    return( 
        <div className={`px-4 ${ dropdown ? 'bg-gray-300' : 'bg-white'}`} >      
        <Fragment >
        <Nav/>
        <main >
        {props.children}
        </main>           
        <Footer/>
        </Fragment> 
        </div>       
    )
}

export default Layout2



