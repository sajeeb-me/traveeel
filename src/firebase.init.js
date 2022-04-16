import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDcEu-Rf2wv8c56qDO0cVolNHfZYhLCXWM",
    authDomain: "traveeel-7ce5d.firebaseapp.com",
    projectId: "traveeel-7ce5d",
    storageBucket: "traveeel-7ce5d.appspot.com",
    messagingSenderId: "429193077564",
    appId: "1:429193077564:web:f2e4d9103924966982b439"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;