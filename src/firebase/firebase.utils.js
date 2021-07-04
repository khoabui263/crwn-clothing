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

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;