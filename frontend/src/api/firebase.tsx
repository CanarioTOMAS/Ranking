import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKqic-sdr5PSZPDSAY85KO02kqFeNTUDA",
    authDomain: "ranking-cc904.firebaseapp.com",
    projectId: "ranking-cc904",
    storageBucket: "ranking-cc904.appspot.com",
    messagingSenderId: "733749495181",
    appId: "1:733749495181:web:966a1e46de0df70e6329c4",
    measurementId: "G-DKKPZSGDT1"
};

const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);
export const auth = getAuth(app);