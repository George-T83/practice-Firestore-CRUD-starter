import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBNmGMeXwF0PwE_xSpRn_rybRGb3OlVLwM',
  authDomain: 'userinfo-3916d.firebaseapp.com',
  projectId: 'userinfo-3916d',
  storageBucket: 'userinfo-3916d.firebasestorage.app',
  messagingSenderId: '1037151397707',
  appId: '1:1037151397707:web:786d52b763e54494122ace',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
