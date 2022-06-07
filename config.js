import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDoNRH4Ut53mFjTpdCWrMf47TTWdggdLds",
    authDomain: "pro-71-7781a.firebaseapp.com",
    projectId: "pro-71-7781a",
    storageBucket: "pro-71-7781a.appspot.com",
    messagingSenderId: "809849607368",
    appId: "1:809849607368:web:cfd89380a0848095dec1fd"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
