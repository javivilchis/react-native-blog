import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBoiW9zKpwmO9T70FBHpdWLzI0B7n94Zrs',
  authDomain: 'production-a9404.firebaseapp.com',
  databaseURL: 'https://console.firebase.google.com/u/0/project/rnblog-bf02b/firestore/data/~2Fblogposts~2FYbX13HGUg8ljQKvvRvgB',
  projectId: 'rnblog-bf02b',
  storageBucket: 'gs://rnblog-bf02b.appspot.com',
  messagingSenderId: '268439258556',
  appId: '1:268439258556:android:b6f3ab73b0769dc60f97b9',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };