import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAwUmGxQEJy2m4VB3Ze8HFA0REp586mNt8',
  authDomain: 'project-67-789f2.firebaseapp.com',
  projectId: 'project-67-789f2',
  storageBucket: 'project-67-789f2.appspot.com',
  messagingSenderId: '773482811551',
  appId: '1:773482811551:web:cceb1ea2f3a669b629d2aa',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
