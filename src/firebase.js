import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDUKcMmmMA3EJmYo2hJ9Wa5CMuzhUQm5Ds",
  authDomain: "financial-helper-625eb.firebaseapp.com",
  projectId: "financial-helper-625eb",
  storageBucket: "financial-helper-625eb.appspot.com",
  messagingSenderId: "345793808731",
  appId: "1:345793808731:web:750520dabd49a72ff4f27e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);