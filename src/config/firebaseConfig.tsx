// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {  initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7SSj4pwsqw6jRPRK-IxFEQXpUexyW6s0",
  authDomain: "practica01mobiles.firebaseapp.com",
  projectId: "practica01mobiles",
  storageBucket: "practica01mobiles.appspot.com",
  messagingSenderId: "690347723630",
  appId: "1:690347723630:web:91eb91b59a3634fd020f7f",
  databaseUrl:"https://practica01mobiles-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const auth =initializeAuth(firebase,{
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
});
export const dbRealTime = getDatabase(firebase)
