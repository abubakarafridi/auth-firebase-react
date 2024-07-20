import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDk9qSiYmckjkwALZQMHh0MVB3uEixrKhw",
  authDomain: "react-authentication-31aa5.firebaseapp.com",
  projectId: "react-authentication-31aa5",
  storageBucket: "react-authentication-31aa5.appspot.com",
  messagingSenderId: "263632582171",
  appId: "1:263632582171:web:2aa0b46ce8a77ceaffeabe"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);