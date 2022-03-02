import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage"
import { getStorage, ref } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDrlbnoN-wRc3PeyT-JFpxjvFaSOzzh2Ls",
  authDomain: "abhiramstudentattendance.firebaseapp.com",
  projectId: "abhiramstudentattendance",
  storageBucket: "abhiramstudentattendance.appspot.com",
  messagingSenderId: "56665601413",
  appId: "1:56665601413:web:b8cabca7bdd01dcafd80ec",
  measurementId: "G-5SG2LK085P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();
const storageRef = ref(storage);
const imagesRef = ref(storage, 'images');
export default { storage, firebase };
