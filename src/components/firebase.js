import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCE9lqvJFcnU2Jkd7n9Dq8iFFGajIlZf0g",
  authDomain: "todo-1266a.firebaseapp.com",
  projectId: "todo-1266a",
  storageBucket: "todo-1266a.appspot.com",
  messagingSenderId: "1064399887957",
  appId: "1:1064399887957:web:5b125ffa07bb555b81bedc",
  measurementId: "G-TTS3C61LT2",//////
  databaseURL: "todo-1266a-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth, app };
