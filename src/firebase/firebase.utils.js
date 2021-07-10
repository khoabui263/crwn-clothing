import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCSbDSCpe-MVoZUHoaod6_t6R9tyOwHKcU",
  authDomain: "crwn-db-1d9c2.firebaseapp.com",
  projectId: "crwn-db-1d9c2",
  storageBucket: "crwn-db-1d9c2.appspot.com",
  messagingSenderId: "134487971102",
  appId: "1:134487971102:web:6e98392817b5dff49aa50f",
  measurementId: "G-1SKRWFMKWP",
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();

     try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
     } catch (error) {
       console.log('error creating user', error);
     }
  }

  return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;