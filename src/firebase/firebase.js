import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAXwnx6leQf5sjx6xQceycjmRTGetfLK4U",
  authDomain: "movieluxe-40cd7.firebaseapp.com",
  projectId: "movieluxe-40cd7",
  storageBucket: "movieluxe-40cd7.firebasestorage.app",
  messagingSenderId: "735770033093",
  appId: "1:735770033093:web:1c739367946282c155a9ac"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);