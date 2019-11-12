import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC1CUih58tUOXqbAqtI5Ik5Blhc3nu_nkA",
  authDomain: "shop-db-68387.firebaseapp.com",
  databaseURL: "https://shop-db-68387.firebaseio.com",
  projectId: "shop-db-68387",
  storageBucket: "shop-db-68387.appspot.com",
  messagingSenderId: "605502771887",
  appId: "1:605502771887:web:85c29dcaadabddb1367a5a",
  measurementId: "G-VNTHMZDCWK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
