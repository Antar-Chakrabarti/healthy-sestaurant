import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCgUvouvzC-6wOSXio1x3jfXJrxDUxGKcM",
    authDomain: "healthy-restaurant-1ada5.firebaseapp.com",
    projectId: "healthy-restaurant-1ada5",
    storageBucket: "healthy-restaurant-1ada5.appspot.com",
    messagingSenderId: "184428861849",
    appId: "1:184428861849:web:7e752c5de86ed009dfdb08"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;