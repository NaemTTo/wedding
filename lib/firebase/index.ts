// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { Analytics, getAnalytics } from 'firebase/analytics';
import { Firestore, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBMJwM9KnKSiwJR3lbYF5-CHN6rhpfYV9k',
  authDomain: 'weddingnote-e0d64.firebaseapp.com',
  projectId: 'weddingnote-e0d64',
  storageBucket: 'weddingnote-e0d64.appspot.com',
  messagingSenderId: '776379030603',
  appId: '1:776379030603:web:f8c9a22c0eb5b8404c81ce',
  measurementId: 'G-XET2J8D380',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics: Analytics, firestore: Firestore;

if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
firestore = getFirestore(app);

export { analytics, firestore };
