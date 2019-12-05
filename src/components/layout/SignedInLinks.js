import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = ()=>{
    return(
        /*List for different browser redirect links */
        <ul className="right">
            <li><NavLink to ='/'>New Project</NavLink></li>
            <li><NavLink to ='/'>Log Out</NavLink></li>
            <li><NavLink to ='/' className='btn btn-floating black lighten-1'>NN</NavLink></li>
        </ul>
                             
             
    )
}

export default SignedInLinks