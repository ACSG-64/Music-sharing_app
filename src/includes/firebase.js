import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCg4ewufCeQfK17CRg49OR92JjfAQpbGyQ',
  authDomain: 'musicvue-fc9ea.firebaseapp.com',
  projectId: 'musicvue-fc9ea',
  storageBucket: 'musicvue-fc9ea.appspot.com',
  appId: '1:1034689171936:web:68f892aca2ab7b599f9b85',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
