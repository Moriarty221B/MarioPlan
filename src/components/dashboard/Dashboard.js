import React, {Component} from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class DashBoard extends Component{
    render(){
        //console.log(this.props)
        const{projects,auth} = this.props;
        if(!auth.uid) return<Redirect to='/signin'/>

        return(
            <div className="dashboard container">
                {/**create 2 columns for project list and notifications */}               
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/> 
                    </div>
                                   
                </div>
            </div>
        )
    }
}
/**Access project props */
const mapStateToProps=(state)=>{
    console.log(state);
    return{
        projects:state.firestore.ordered.projects,
        auth:state.firebase.auth
    }
}
/**link firebase and projects */
export default compose ( connect(mapStateToProps),
    firestoreConnect([{collection:'projects'}])
)(DashBoard)