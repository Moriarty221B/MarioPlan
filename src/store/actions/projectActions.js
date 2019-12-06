/** */
import {firestore} from '../../config/fbConfig'

export const createProject=(project)=>{
    return(dispatch,getState,{getFirebase, getFirestore})=>{
        //asynchronous call to database
       // const firestore= getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'dash',
            authorLastName:'cash',
            authorId:'2525',
            createdAt: new Date()

        }).then(()=> { //go off when task complete
        dispatch({type:'CREATE_PROJECT',project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        })
    }
};