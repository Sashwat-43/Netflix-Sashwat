import firebase from "firebase";

const Config = {
    apiKey: "AIzaSyDgRD3YX_Pm7FF5pz_Rz_Sgua0Tn-umTRo",
    authDomain: "netflix-clone-306f2.firebaseapp.com",
    projectId: "netflix-clone-306f2",
    storageBucket: "netflix-clone-306f2.appspot.com",
    messagingSenderId: "204457001587",
    appId: "1:204457001587:web:7080a5811fcb511ba96006",
    measurementId: "G-C2BB6W33EJ"
  };

  const firebaseApp = firebase.initializeApp(Config);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db,auth };