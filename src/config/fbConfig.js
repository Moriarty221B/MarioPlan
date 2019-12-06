import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Initialise firebase
var config = {
    apiKey: "AIzaSyD2VW_VNq2TcHobSC4jrwpdRNlY_aVHa5w",
    authDomain: "moriarty221b-marioplan.firebaseapp.com",
    databaseURL: "https://moriarty221b-marioplan.firebaseio.com",
    projectId: "moriarty221b-marioplan",
    storageBucket: "moriarty221b-marioplan.appspot.com",
    messagingSenderId: "1030593286572",
    appId: "1:1030593286572:web:71a8f167a46c8dbf70ea09",
    measurementId: "G-D5N9GNZJE6"
  };

const firebaseApp = firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export const firestore = firebaseApp.firestore();
export default firebase;