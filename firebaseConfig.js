
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGUL8sIcJ34eDPsAs46U84Mnruj_pjs7s",
  authDomain: "comuter-auth.firebaseapp.com",
  projectId: "comuter-auth",
  storageBucket: "comuter-auth.appspot.com",
  messagingSenderId: "799808018003",
  appId: "1:799808018003:web:342b8498a460af69a518a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
