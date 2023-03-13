import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage'; 

const firebaseConfig = {
    apiKey: "AIzaSyCEiAbzEeJ_U0gtUtZyQBGlKjyP-OKnv50",
    authDomain: "https://disney-clone-project-n1kcaeghn-iamakmoor.vercel.app/",
    projectId: "disney-clone-project-7215d",
    storageBucket: "disney-clone-project-7215d.appspot.com",
    messagingSenderId: "814596240725",
    appId: "1:814596240725:web:71f535d72016ad28e76bdc",
    measurementId: "G-DGXBW5F5VQ"
  };

  // Initialize Firebase

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;