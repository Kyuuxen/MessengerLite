// firebase.js (MODERN, WORKING)

import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AlzaSyAs6tp0tBOXg8AIZp8jELgedJjHSSMOE6I",
  authDomain: "minimessenger-50bd0.firebaseapp.com", // ⚠️ VERY IMPORTANT
  projectId: "minimessenger-50bd0",
  storageBucket: "minimessenger-50bd0.firebasestorage.app",
  messagingSenderId: "896519298108",
  appId: "1:896519298108:web:10ee1933e921e4eaa7b739",
};

const app = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

console.log("✅ Firebase initialized (MODULAR)");
