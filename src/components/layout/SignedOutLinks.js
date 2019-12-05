import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = ()=>{
    return(
        /*List for different browser redirect links */
        <ul className="right">
            <li><NavLink to ='/signup'>Sign Up</NavLink></li>
            <li><NavLink to ='/signin'>Login</NavLink></li>
        </ul>
                             
             
    )
}

export default SignedOutLinks