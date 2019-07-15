import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDTNLTA_At57Xy37aoiMchpcDXSEWfYz1Y",
    authDomain: "crwn-db-4079c.firebaseapp.com",
    databaseURL: "https://crwn-db-4079c.firebaseio.com",
    projectId: "crwn-db-4079c",
    storageBucket: "",
    messagingSenderId: "679842569836",
    appId: "1:679842569836:web:ca170498bc2cbc8d"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;