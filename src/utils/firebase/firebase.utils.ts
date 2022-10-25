import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'
import firebase from "firebase/compat";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJf8YF4NdxfmMpYBO_N2iZNWyxZwwDFKQ",
    authDomain: "crwn-clothing-db-9f2fd.firebaseapp.com",
    projectId: "crwn-clothing-db-9f2fd",
    storageBucket: "crwn-clothing-db-9f2fd.appspot.com",
    messagingSenderId: "465719851952",
    appId: "1:465719851952:web:be63480ba1dbeb3eddb475"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: UserCredential, additionalInformation?: {displayName: string}) => {
    if (userAuth.user != null) {
        const userDocRef = doc(db, 'users', userAuth.user!.uid)

        const userSnapshot = await getDoc(userDocRef);
        if (!userSnapshot.exists()) {
            const createdAt = new Date();
            try {
                let dname = null
                if (userAuth.user.displayName == null) {
                    if (additionalInformation) {
                        dname = additionalInformation.displayName
                    }
                }
                else {
                    dname = userAuth.user.displayName
                }
                await setDoc(userDocRef,
                    {
                        name: dname, email: userAuth.user.email, created: createdAt,
                    })
            } catch (error) {
                if (error instanceof Error) {
                    console.log('error creating user', error.message);
                }
            }
        }
        return userDocRef
    }
    else {
        console.log('auth error')
    }

}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}