import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'

const Navbar = (props)=>{
    const {auth}= props;
   // console.log(auth)
   const links=auth.uid?<SignedInLinks/>:<SignedOutLinks/>;//display tabs on navbar based on sign up status
    return(
        /*materialized class to generate wrapper for navbar*/
        <nav className="nav-wrapper pink darken -3">
            <div className="container">
                {/*redirect to Homepage*/}               
                <Link to='/' className="brand-logo">MarioPlan</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth //access authentication
        
    }
}

export default connect(mapStateToProps)(Navbar)