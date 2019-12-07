/** */
import {firestore} from '../../config/fbConfig'

export const createProject=(project)=>{
    return(dispatch,getState,{getFirebase, getFirestore})=>{
        //asynchronous call to database
       // const firestore= getFirestore();
       const profile= getState().firebase.profile;
       const authorId=getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            //display correct user info when new project created when logged in
            authorFirstName:profile.firstName, 
            authorLastName:profile.lastName,
            authorId:authorId,
            createdAt: new Date()

        }).then(()=> { //go off when task complete
        dispatch({type:'CREATE_PROJECT',project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        })
    }
};