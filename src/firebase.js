// v9 compat packages are API compatible with v8 code
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBKY9Bkt1mx_h9JZkZL68JqfJiAiEMscoE",
    authDomain: "facebookredux-clone.firebaseapp.com",
    projectId: "facebookredux-clone",
    storageBucket: "facebookredux-clone.appspot.com",
    messagingSenderId: "625291811337",
    appId: "1:625291811337:web:590a8e99fdf6e6b31b36d8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = firebase.auth();

export { db, auth };