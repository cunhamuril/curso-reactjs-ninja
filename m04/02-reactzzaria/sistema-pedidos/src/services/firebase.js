import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB0vj_XCZcnuD-fx4dQ1gIakSzgng3UipQ',
  authDomain: 'reactzzaria-cursoreactninja.firebaseapp.com',
  databaseURL: 'https://reactzzaria-cursoreactninja.firebaseio.com',
  projectId: 'reactzzaria-cursoreactninja',
  storageBucket: 'reactzzaria-cursoreactninja.appspot.com',
  messagingSenderId: '215608437746',
  appId: '1:215608437746:web:76cd084b8e0c55cee9596b',
  measurementId: 'G-65MSEJ4Q6T',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
