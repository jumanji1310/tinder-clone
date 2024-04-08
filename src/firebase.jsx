import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2tHm-hPPOjh_Xy9WdmE7h7wKcds8yrPM",
  authDomain: "tinder-clone-92848.firebaseapp.com",
  projectId: "tinder-clone-92848",
  storageBucket: "tinder-clone-92848.appspot.com",
  messagingSenderId: "598613987047",
  appId: "1:598613987047:web:5a50216a50edab9c931c42",
  measurementId: "G-FMETLP67P0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
