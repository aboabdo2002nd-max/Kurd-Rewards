import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOgsGbjz3y2ugybCPo4HXISOBp6JtJ-6c",
  authDomain: "kurd-rewards.firebaseapp.com",
  projectId: "kurd-rewards",
  storageBucket: "kurd-rewards.firebasestorage.app",
  messagingSenderId: "1021836588474",
  appId: "1:1021836588474:web:3bece356f0a8b0745d9983",
  measurementId: "G-201ZQ2VY71"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
