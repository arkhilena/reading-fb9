import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB6fdgTnir4INCpohFAPWMQUOLB9wC1tZA",
  authDomain: "reading-fb9.firebaseapp.com",
  projectId: "reading-fb9",
  storageBucket: "reading-fb9.appspot.com",
  messagingSenderId: "138322941926",
  appId: "1:138322941926:web:e00dcef2aceed3dc826827"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }