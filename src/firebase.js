// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import fungsi khusus database

const firebaseConfig = {
  apiKey: "AIzaSyC4OinLyD8S8fehKUuFC896cMVR22vM0gY",
  authDomain: "company-profile-3622c.firebaseapp.com",
  projectId: "company-profile-3622c",
  storageBucket: "company-profile-3622c.firebasestorage.app",
  messagingSenderId: "886800880170",
  appId: "1:886800880170:web:68a83ae628099e54452953",
  measurementId: "G-GT8HL0F73S",
};

// 1. Memulai aplikasi Firebase
const app = initializeApp(firebaseConfig);

// 2. Memulai layanan Database (Firestore)
const db = getFirestore(app);

// 3. Export db agar bisa kita gunakan nanti di form Ulasan (Feedback.jsx)
export { db };
