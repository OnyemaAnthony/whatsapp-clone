import firebase from "firebase";

const firebaseApp= firebase.initializeApp( {
    apiKey: "AIzaSyA04Pr9CRKkpnOM3ZRvzhLTL0HKO2JHSwA",
    authDomain: "whatsapp-clone-12a7c.firebaseapp.com",
    projectId: "whatsapp-clone-12a7c",
    storageBucket: "whatsapp-clone-12a7c.appspot.com",
    messagingSenderId: "1007303990832",
    appId: "1:1007303990832:web:80e40c8eb428cbbbfcd7f5",
    measurementId: "G-TT9N119LQE"
});

const  db = firebaseApp.firestore();

export {db};