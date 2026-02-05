import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYL24HMH00tTADjruB8P8RRIFwP-04aCY",
  authDomain: "blog-69233.firebaseapp.com",
  projectId: "blog-69233",
  storageBucket: "blog-69233.appspot.com",
  messagingSenderId: "835347766519",
  appId: "1:835347766519:web:b789490db1c26be4ef47f2",
  measurementId: "G-RVKRZDNKDM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);