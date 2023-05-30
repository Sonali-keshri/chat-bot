
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJm5MYnvYJni3AomT-syCP9vayz-75M1A",
  authDomain: "chatbot-c9857.firebaseapp.com",
  projectId: "chatbot-c9857",
  storageBucket: "chatbot-c9857.appspot.com",
  messagingSenderId: "426012687871",
  appId: "1:426012687871:web:4f30e82766f9ed2743bbca"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)