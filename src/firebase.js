import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

import { firebaseConfig } from './config';

// Initialise the app
firebase.initializeApp(firebaseConfig);

// Export items
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };