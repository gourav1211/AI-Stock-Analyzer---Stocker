

// src/firebase.js (or .ts)
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Import other services you'll use later, like getFirestore, getStorage, etc.

const firebaseConfig = {
  // Your web app's Firebase configuration object goes here
  apiKey: import.meta.env.VITE_YOUR_API_KEY,
  authDomain: import.meta.env.VITE_YOUR_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_YOUR_PROJECT_ID,
  storageBucket: import.meta.env.VITE_YOUR_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_YOUR_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_YOUR_APP_ID
};

const app = initializeApp(firebaseConfig);

// Export the services you want to use in your components
export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
