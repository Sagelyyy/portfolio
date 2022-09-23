// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, setDoc, addDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ3Ytdfoewcuu2tW21SICwq7jl9ZIFOlM",
  authDomain: "chriscancode-755f5.firebaseapp.com",
  projectId: "chriscancode-755f5",
  storageBucket: "chriscancode-755f5.appspot.com",
  messagingSenderId: "303652834889",
  appId: "1:303652834889:web:49a35b74149da528e9f998",
  measurementId: "G-RHND8FF8SJ"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase)
const auth = getAuth(firebase)
const storage = getStorage();


const sendEmail = async (emailData) => {
    const emailRef = await addDoc(collection(db, "email"), emailData)
    console.log("Document written with ID: ", emailRef.id);
}

export { db, auth, storage, sendEmail };