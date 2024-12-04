// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCut584gNOkfkiibmzjQYSD_Ot7q3DdVpU",
    authDomain: "serene-minds-d1ede.firebaseapp.com",
    projectId: "serene-minds-d1ede",
    storageBucket: "serene-minds-d1ede.firebasestorage.app",
    messagingSenderId: "320810990282",
    appId: "1:320810990282:web:23776e601ce93b9d5c5233",
    measurementId: "G-L2VZ08PFNR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
