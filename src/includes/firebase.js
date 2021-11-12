import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

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
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
