
import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNEd5bFTTYsHosmpoF4wEGbd_yY2LnyG4",
  authDomain: "campusconnect-37890.firebaseapp.com",
  projectId: "campusconnect-37890",
  storageBucket: "campusconnect-37890.firebasestorage.app",
  messagingSenderId: "763172445080",
  appId: "1:763172445080:web:6665cb8c130ae4415229ed",
  measurementId: "G-ZLPDJL9HEG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
