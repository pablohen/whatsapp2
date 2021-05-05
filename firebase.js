import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCI8jzMb_PJcoCPun2dqV_n-3supBNpPYo',
  authDomain: 'whatsapp2-c04f7.firebaseapp.com',
  projectId: 'whatsapp2-c04f7',
  storageBucket: 'whatsapp2-c04f7.appspot.com',
  messagingSenderId: '424361098141',
  appId: '1:424361098141:web:ca216403c4d0d4b34bcd74',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
